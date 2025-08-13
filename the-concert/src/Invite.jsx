import { useState } from "react";

function Invite() {
  const [showDetailsForm, setShowDetailsForm] = useState(false);

  const handleYeboClick = (e) => {
    e.preventDefault();
    setShowDetailsForm(true);
  };

  const handleNoClick = () =>{
    alert("Uyahlanga ntombi , zama futhi.😔");
};



  return (
    <form
      className="form"
      action="https://formspree.io/f/mqabolng" // Replace with your Formspree endpoint
      method="POST"
    >
      {!showDetailsForm ? (
        <>
          <h1 className="title">☝🏾 Concert Playlist ☝🏾</h1>
          <p className="poison"> (Pick your poison while you read)</p>
          <h1 className="greetings">Sawubona Ntombikayise ❤️</h1>
          <p>Im back with a bigger and better design, as promised 🙂‍↕️</p>
          <h3 className="question">
            Would you love to hear all these songs above live? 🎸
          </h3>
          <div id="buttons">
            <button type="button" className="yesBtn" onClick={handleYeboClick}>
              Yebo
            </button>
            <button type="button" className="noBtn" onClick={handleNoClick}>
              NO
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="title"> 🎤 Concert Details  🎤</h1>
          <h3 className="notice"> When you come back , fill this in. </h3>
          <label className="lblDate">
            Date:
            <input type="date" name="date" required />
          </label>
          <br/>
          <label className="lblTime">
            Time:
            <input type="time" name="time" required />
          </label>
          <br/>
          <button type="submit" className="submitBtn">Submit</button>
        </>
      )}
    </form>
  );
}

export default Invite;
