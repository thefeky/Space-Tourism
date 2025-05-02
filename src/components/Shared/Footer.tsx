function Footer() {
  return (
    <footer className="overflow-hidden bottom-[5px] fixed mt-auto w-full flex justify-center z-0">
      <p className="text-center font-barlow text-white text-sm h-5">
        Challenge by{" "}
        <a
          className="underline text-sky-300 hover:text-sky-500"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="underline text-sky-300 hover:text-sky-500"
          href="github.com/thefeky"
        >
          thefeky
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
