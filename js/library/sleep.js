const sleep = () => {
  const speed = document.getElementById("velocita").value

  switch(speed) {

    case "0": return new Promise(resolve => setTimeout(resolve, 300));

    case "1": return new Promise(resolve => setTimeout(resolve, 100));

    case "2": return new Promise(resolve => setTimeout(resolve, 10));

    default: return 0;
  }
}

export default sleep