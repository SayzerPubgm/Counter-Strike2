
function Form() {
  return (
    <div className="form">
      <h2>Send Us Your Question</h2>
      <div className="form-container">
        <form>
          <label className="form-control">
            <span>Your Email</span>
            <input type="text" required/>
          </label>
          <label className="form-control">
            <span>Message</span>
            <textarea></textarea>
          </label>
          <button className="button form_btn">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
