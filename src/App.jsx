import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./views/Home";

function App() {
  useEffect(() => {
    function mouseEnterHandler(e) {
 console.log("e ", e);
      $(e.currentTarget)
        .find(".effect-text")
        .each(function (idx, ele) {
          console.log($(ele).attr("data-text"),'-----');
          $(ele).textShuffle({
            chars: $(ele).attr("data-text"),
            fps: 80
          });
        });
    }
    function effectListener() {
      $(".effect-text").each(function (idx, ele) {
        $(ele).parent().on("mouseenter", mouseEnterHandler);
      });
    }
    window.addEventListener("load", effectListener);
    return () => window.removeEventListener("load", effectListener);
  }, []);
  return (
    <div className="grid">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
