export default function getUniqueRandomId(ids: string[] | null) {
    const maxNumber = 1011;
    let n;
  
    if (ids && ids.length > 0) {
      const usedNumbers = new Set(ids.map(id => parseInt(id, 10)));

      do {
        n = Math.floor(Math.random() * maxNumber);
      } while (usedNumbers.has(n));
      console.log('Used Numbers:', Array.from(usedNumbers));

    } else {
      n = Math.floor(Math.random() * maxNumber);
    }
  
    return n.toString();
    
  }
  