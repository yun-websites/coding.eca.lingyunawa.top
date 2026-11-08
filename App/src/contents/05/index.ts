import Slide01 from "./slides/Slide01";
import Slide02 from "./slides/Slide02";
import Slide03 from "./slides/Slide03";
import Slide04 from "./slides/Slide04";
import Slide05 from "./slides/Slide05";
import Slide06 from "./slides/Slide06";
import Slide07 from "./slides/Slide07";
import Slide08 from "./slides/Slide08";
import Slide09 from "./slides/Slide09";
import Slide10 from "./slides/Slide10";
import Slide11 from "./slides/Slide11";
import Slide12 from "./slides/Slide12";
import { LibrariesDocument as CnWorksheet } from "./worksheet/cn";
import { LibrariesDocument as EnWorksheet } from "./worksheet/en";

export default {
    metadata: {
        id: 5,
        title: "Borrow Python's Tools",
        summary: "Use import and from ... import ... to call reusable Python libraries.",
    },
    slides: [Slide01, Slide02, Slide03, Slide04, Slide05, Slide06, Slide07, Slide08, Slide09, Slide10, Slide11, Slide12],
    worksheet: {
        en: EnWorksheet,
        cn: CnWorksheet,
    },
};
