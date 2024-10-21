export default function Footer() {
  return (
    <>
      <footer className="footer pt-3  ">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              Copyright ©{" "}
              <script>document.write(new Date().getFullYear())</script>
              &nbsp;Herbel  
              <a
                href="https://www.creative-tim.com"
                className="text-dark ms-1"
                target="_blank"
              >
              </a>
              .
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">

              </li>
              <li className="nav-item">
              </li>
              <li className="nav-item">
              </li>
              <li className="nav-item">
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}


