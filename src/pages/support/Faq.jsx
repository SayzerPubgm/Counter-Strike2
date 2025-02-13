function Faq() {
  return (
    <div className="faq_container">
      <h2>Frequently Asked Questions</h2>
      <hr />
      <ul>
        <li>
          What game modes are available in Counter-Strike 2 at launch?
          'Deathmatch,' 'Casual,' 'Wingman,' 'Competitive,' and 'Premier Mode.'
        </li>
        <li>
          Is Counter-Strike 2 available on Mac? No, Counter-Strike 2 cannot be
          played directly on macOS.
        </li>
        <li>
          Is the «CS:GO 360 Stats» feature available in Counter-Strike 2? No.
          Since «CS:GO 360 Stats» is no longer available, all subscribers will
          be refunded for the last month. The «CS:GO 360 Stats» subscription
          will no longer be renewed.
        </li>
        <li>
          I didn't receive the «CS:GO Music Kit» and «CS:GO Medal». Can I still
          get them?No. The «CS:GO Music Kit» and «CS:GO Medal» were
          automatically granted to accounts that met the requirements. If you
          didn’t receive them, your account did not qualify. Steam Support
          cannot provide these items.
        </li>
        <li>
          I have feedback or a request regarding Counter-Strike 2. Where should
          I send it? If you want to reach out about Counter-Strike 2—suggest an
          idea, request a new feature, or ask for something from CS:GO that
          didn't make it into CS2—send an email to the Counter-Strike team at:
          cs2team @ valvesoftware dot com.
        </li>
      </ul>
      <a
        className="universal-btn clickmore"
        href="https://steamcommunity.com/faqs/steam-help/view/5ED2-ED8E-81F4-0C18"
      >
        Click for more
      </a>
    </div>
  );
}

export default Faq;
