export default function getRandomId(ids : string[]|null) {
    let n = Math.floor(Math.random() * 1011);
  
    if (ids && ids.length > 0) {
      for (let i = 0; i < ids.length; i++) {
        if (n.toString() === ids[i]) {
          n = Math.floor(Math.random() * 1011);
          i = -1; 
        }
      }
    }
  
    return n.toString();
  }
  