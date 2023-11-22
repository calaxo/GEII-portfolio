import geii from "@assets/geii.gif";
import iut from "@assets/iut.png";
const But2_sae2 = () => {
  const tableStyle = {
    border: "solid",
    width: "100%",
  };

  const headerCellStyle = {
    backgroundColor: "#FFCC33",
    fontSize: "28px",
    color: "darkred",
    textAlign: "center",
  };

  const niv1Style = {
    backgroundColor: "#ffb68b",
    fontSize: "32px",
    textAlign: "center",
    marginLeft: "10%",
    marginRight: "60%",
    border: "groove",
  };

  const niv2Style = {
    backgroundColor: "#ffb68b",
    fontSize: "28px",
    textAlign: "center",
    marginLeft: "30%",
    marginRight: "40%",
    border: "groove",
  };

  const niv3Style = {
    backgroundColor: "#ffb72b",
    fontSize: "20px",
    textAlign: "center",
    marginLeft: "35%",
    marginRight: "30%",
    border: "groove",
  };

  const ligneStyle = {
    paddingTop: "30px",
    border: "solid",
  };

  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <td colSpan="5" style={headerCellStyle}>
              SAE Badgeuse RFID
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5">
              <p style={{ color: "darkred" }}>
                <b>
                  <u>Objectifs:</u>
                </b>
              </p>
              <p>
                <a href="https://bv.univ-poitiers.fr/access/content/group/7d0bd2dd-1dd5-42d4-b5b7-501daecddf3f/Enseignants/Michel%20Garcier/SAE2/Sonometre/SAE1_S1_C1_presentation.pdf">
                  MGA Sujet 2021/2022
                </a>
              </p>
            </td>
          </tr>
          <tr style={{ backgroundColor: "yellow" }} align="center">
            <td width="25%">Activités réalisées</td>
            <td width="25%">Ressources utilisées</td>
            <td width="25%">Traces</td>
            <td width="25%">Autoévaluation</td>
          </tr>
          {/* Placeholder for your content */}
          <tr>
            <td>case1</td>
            <td>case2</td>
            <td>case3</td>
            <td>case5</td>
          </tr>
          <tr>
            <td>case1</td>
            <td>case2</td>
            <td>case3</td>
            <td>case5</td>
          </tr>
          <tr>
            <td>case1</td>
            <td>case2</td>
            <td>case3</td>
            <td>case5</td>
          </tr>
          <tr>
            <td colSpan="5" style={headerCellStyle}>
              ANALYSE REFLEXIVE
            </td>
          </tr>
          <tr>
            <td colSpan="5">
              <p>
                Réflexions sur les traces conservées, sur les raisons qui justifient leur choix, sur les apprentissages qu’elles démontrent, sur la construction de connaissances qu’elles révèlent, sur
                les liens entre théorie et pratique, sur les apprentissages à réaliser… Vous décrivez ce que vous avez appris depuis le début de la SAE et ce qu’il vous reste à apprendre. Vous portez
                un jugement global sur votre progression (degré de satisfaction, perception).
                <br />
                Comment ai-je appris ?
                <br />
                Qu’ai-je réussi à accomplir ? Ai-je rencontré des difficultés ?
                <br />
                Quels savoirs ai-je acquis ? Quels savoirs ai-je démontrés ?
                <br />
                À quelles compétences visées par le programme du BUT ces savoirs se rattachent-ils ?
                <br />
                Quelles connaissances, habiletés, attitudes … aurais-je dû mobiliser pour mieux faire face aux situations rencontrées ?
                <br />
                Que dois-je apprendre pour continuer à développer mes compétences ??
                <br />
                Comment vais-je m’y prendre pour accomplir ces apprentissages ?
              </p>
            </td>
          </tr>
        </tbody>
      </table>

      <img className="imggeii" src={geii} alt="geii" />
      <img className="imgiut" src={iut} alt="iut" />
    </div>
  );
};

export default But2_sae2;
