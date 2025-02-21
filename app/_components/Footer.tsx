export default function Footer() {
  return (
    <footer className="bg-orange-500 pb-4">
      <div className="container w-[90%] mx-auto py-5 flex flex-col gap-3 text-center md:text-start md:flex-row md:gap-10 md:justify-between">
        <div className="title lg:w-1/3">
          <h1 className="text-slate-200 font-bold text-base md:text-lg">
            CareerHub
          </h1>
          <p className="text-slate-200 md:text-base">
            A digital platform that makes it easy for job seekers to find
            openings that match their skills and for companies to find the best
            candidates.
          </p>
        </div>
        <div className="logo flex items-start justify-center gap-5 text-slate-300 pt-6 ">
          <a
            href="https://www.google.com/"
            target="_blank"
            className="hover:text-white"
          >
            <i className="fab fa-google text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="hover:text-white"
          >
            <i className="fab fa-facebook text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/renaldiisptr/"
            target="_blank"
            className="hover:text-white"
          >
            <i className="fab fa-instagram text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/renaldiisptr/"
            target="_blank"
            className="hover:text-white"
          >
            <i className="fab fa-linkedin text-2xl" />
          </a>
          <a
            href="https://github.com/Renaldis"
            target="_blank"
            className="hover:text-white"
          >
            <i className="fab fa-github text-2xl" />
          </a>
        </div>
        <div className="services flex items-start justify-center text-slate-100 gap-5 lg:w-1/3 pt-6 text-sm md:text-base">
          <a href="#" className="hover:text-white">
            <span>Privacy Policy</span>
          </a>
          <a href="#" className="hover:text-white">
            <span>Terms of Service</span>
          </a>
          <a href="#" className="hover:text-white">
            <span>Contact Us</span>
          </a>
        </div>
      </div>
      <div className="text-center text-slate-100 text-sm md:text-base">
        <span>&copy; 2025 Copyright. All rights reserved.</span>
        <p className="text-sm mt-2">CareerHub by Renaldi Saputra</p>
      </div>
    </footer>
  );
}
