import React from "react";

const Nom = ({ firstName }) => {
  return (
    <div>
      {firstName ? (
        <img
          src="https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/362934358_3640668376176415_4694958983513008127_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=IdRgelCG-GYAX8oC3fn&_nc_ht=scontent.ftun9-1.fna&cb_e2o_trans=t&oh=00_AfC3tR5lOqKlCB2uSLLTaqqikGQ-nJ0geJz-pfXI7UmmCg&oe=6589E1D9"
          width={"100rem"}
        />
      ) : null}
      <p>Hello, {firstName || "there"}!</p>
    </div>
  );
};

export default Nom;
