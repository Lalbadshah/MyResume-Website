import "./App.css";
import firebase from "firebase/compat/app";
import {
  getFirestore,
  doc,
  getDoc,
  Timestamp,
  setDoc,
} from "firebase/firestore";
import "firebase/compat/auth";
import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

import {
  useAuthState,
  useSendSignInLinkToEmail,
} from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useEffect, useRef, useState } from "react";
firebase.initializeApp({
  apiKey: "AIzaSyC3GS9Lm4DY6db1tKs_4hEL_Vi5DTt4100",
  authDomain: "hireaissist.firebaseapp.com",
  projectId: "hireaissist",
  storageBucket: "hireaissist.appspot.com",
  messagingSenderId: "753010437871",
  appId: "1:753010437871:web:32b9eed54110085f39f51a",
  measurementId: "G-ZEMWVND2D1",
});

const auth = firebase.auth();
const firestore = getFirestore();

function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">HireAIssist 🧠</header>
      {user ? <InterviewRoom user={user} /> : <SignIn user={user} />}
    </div>
  );
}

function SignIn(props) {
  const [email, setEmail] = useState("");

  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginInfoMsg, setLoginInfoMsg] = useState("");

  useEffect(() => {
    if (props.user) {
      //User is signed in
      console.log("Current signed in user=", props.user);
    } else {
      console.log("No User in useEffect", props.user);

      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = localStorage.getItem("interviewerEmail");
        if (!email) {
          email = window.prompt("Please Provide an email");
        }
        signInWithEmailLink(
          auth,
          localStorage.getItem("interviewerEmail"),
          window.location.href
        )
          .then((result) => {
            console.log("result.user=", result.user);
            localStorage.removeItem("interviewerEmail");
            setLoginLoading(false);
            setLoginError("");
          })
          .catch((err) => {
            setLoginLoading(true);
            setLoginError(err.message);
          });
      }
    }
  }, [props.user]);

  const signInWithEmail = (event) => {
    event.preventDefault();

    sendSignInLinkToEmail(auth, email, {
      //TODO: Update with Prod URL
      url: "http://localhost:3000/",
      handleCodeInApp: true,
    })
      .then(() => {
        localStorage.setItem("interviewerEmail", email);
        setLoginLoading(false);
        setLoginError("");
        setLoginInfoMsg("I just sent you an email with a link to login");
      })
      .catch((err) => {
        setLoginLoading(true);
        setLoginError(err.message);
      });
  };

  return (
    <section>
      <form onSubmit={signInWithEmail}>
        <input
          value={email}
          type={"email"}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type={"submit"} className="sign-in">
          {loginLoading ? (
            <span>Sending Login Link Email...</span>
          ) : (
            <span>Sign In with Email</span>
          )}
        </button>
        {loginError !== "" && <div className={"error-msg"}>{loginError}</div>}
        {loginInfoMsg !== "" && (
          <div className={"info-msg"}>{loginInfoMsg}</div>
        )}
      </form>
    </section>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button onClick={() => auth.signOut()} className="sign-out">
        End Session and Sign Out
      </button>
    )
  );
}

function InterviewRoom(props) {
  const interviewerEmail = props.user.email;
  const messageHistoryDocRef = doc(
    firestore,
    `messageHistory`,
    interviewerEmail
  );
  const [messageHistory, setMessageHistory] = useState([]);
  const [interviewerQuery, setInterviewerQuery] = useState("");
  const [processingSubmittedPrompt, setProcessingPromptSubmitted] =
    useState(false);

  useEffect(() => {
    async function fetchHistory() {
      const docSnapshot = await getDoc(messageHistoryDocRef);
      if (docSnapshot.exists()) {
        console.log("Firestore ?", docSnapshot);
        console.log("docSnapshot.data()= ?", docSnapshot.data());
        setMessageHistory(docSnapshot.data().messages);
      } else {
        await setDoc(doc(firestore, `messageHistory`, interviewerEmail), {
          messages: [],
        });
        console.log("Document snapshot doesnt exist? docSnapshot", docSnapshot);
        console.log(
          "Document snapshot doesnt exist? messageHistoryDocRef",
          messageHistoryDocRef
        );
      }
    }

    fetchHistory();
  }, [props.user]);

  const handleHireAissistCall = async (interviewerQuery) => {
    const authToken = `Bearer ${await props.user.getIdToken()}`;

    fetch(
      "https://us-central1-hireaissist.cloudfunctions.net/app/hireaissist",
      {
        method: "POST",
        withCredentials: true,
        headers: {
          Authorization: authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: interviewerEmail,
          prompt: interviewerQuery,
        }),
      }
    )
      .then((response) => response.json())
      .then(async (data) => {
        console.log("response data =", data.result);
        const hireAissistResponse = data.result;

        let updatedMessageHistory = [
          ...messageHistory,
          {
            query: interviewerQuery,
            response:
              (await hireAissistResponse) === undefined
                ? "No Response"
                : hireAissistResponse,
            createdAt: Timestamp.now(),
          },
        ];

        console.log(
          "Setting new document message data to:",
          updatedMessageHistory
        );

        await setDoc(messageHistoryDocRef, {
          messages: updatedMessageHistory,
        }).catch((err) => {
          console.log("setDoc error", err);
        });

        setMessageHistory(updatedMessageHistory);

        setProcessingPromptSubmitted(false);

        return hireAissistResponse;
      });
  };

  const sendQuery = async (e) => {
    e.preventDefault();

    setProcessingPromptSubmitted(true);

    setInterviewerQuery("");

    const hireAissistResponse = handleHireAissistCall(interviewerQuery);
  };

  return (
    <section className={"message-form-container"}>
      <div className={"messages-container"}>
        <div className={`message AI`}>
          <div className={"message-content"}>
            <p>
              Hi am HireAIssist, I was created by Prateek to answer any
              questions a recruiter may ask on a screening call! Try asking me
              some questions about Prateek's Skills or experience
            </p>
          </div>
        </div>
        {messageHistory.length > 0 &&
          messageHistory.map((message) => (
            <InterviewMessage key={message.id} message={message} />
          ))}
      </div>
      <form
        className={`prompt-submission-box ${
          processingSubmittedPrompt ? "thinking" : ""
        }`}
        onSubmit={sendQuery}
      >
        <input
          value={interviewerQuery}
          onChange={(event) => setInterviewerQuery(event.target.value)}
          disabled={processingSubmittedPrompt}
          placeholder={`${processingSubmittedPrompt ? "Thinking... " : ""}`}
        />
        <button type={"submit"}>🚀</button>
      </form>
    </section>
  );
}

function InterviewMessage(props) {
  const { query, response } = props.message;

  return (
    <>
      <div className={`message interviewer`}>
        <div className={"message-content"}>
          <p>{query}</p>
        </div>
      </div>
      <div className={`message AI`}>
        <div className={"message-content"}>
          <p>{response}</p>
        </div>
      </div>
    </>
  );
}

export default App;
