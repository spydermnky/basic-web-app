export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My Andrew ID is pkhomche"
    );
  }

  if (query.includes("What is your name?")) {
    return (
      "My name is Peter"
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const multMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multMatch) {
    const x: number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x*y).toString();
  }

  const largestNum = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (largestNum) {
    const x: number = parseInt(largestNum[1]);
    const y: number = parseInt(largestNum[2]);
    const z: number = parseInt(largestNum[3]);
    return Math.max(x,y,z).toString();
  }

  const minusMatch = query.match(/What is (\d+) minus (\d+)/);
  if (minusMatch) {
    const x: number = parseInt(minusMatch[1]);
    const y: number = parseInt(minusMatch[2]);
    return (x-y).toString();
  }

  const powerMatch = query.match(/What is (\d+) to the power of (\d+)/);
  if (powerMatch) {
    const x: number = parseInt(powerMatch[1]);
    const y: number = parseInt(powerMatch[2]);
    return (x**y).toString();
  }
  
  const threeSumMatch = query.match(/What is (\d+) plus (\d+) plus (\d+) /);
  if (threeSumMatch) {
    const x: number = parseInt(threeSumMatch[1]);
    const y: number = parseInt(threeSumMatch[2]);
    const z: number = parseInt(threeSumMatch[3]);
    return (x+y+z).toString();
  }

  return "";
}
