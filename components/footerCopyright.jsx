import { useRouter } from "next/router";

function FooterCopyright() {
  const router = useRouter();
  const footerPos = router.asPath === "/contact" ? "fixed" : "default";
  return (
    <footer>
      <div style={{ height: "65px" }}>
        <div className={footerPos}>
          &copy; Copyright 2020 - 2021{" "}
          <a href="https://www.gethmanagement.com/" className="text-white">
            Geth Management
          </a>{" "}
          - All Rights Reserved
          <style jsx>{`
            .default {
              width: 100%;
              height: 100%;
              text-align: center;
              color: white;
              padding: 20px 5px 10px 5px;
              margin-top: 10px;
              background-color: #1269ec;
            }

            .fixed {
              position: fixed;
              left: 0;
              bottom: 0;
              width: 100%;
              text-align: center;
              color: white;
              padding: 20px 5px 10px 5px;
              margin-top: 10px;
              background-color: #1269ec;
            }
          `}</style>
        </div>
      </div>
    </footer>
  );
}

export default FooterCopyright;
