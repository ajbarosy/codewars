/*

The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

The most frequently used key is "GA-DE-RY-PO-LU-KI".

 G => A
 g => a
 a => g
 A => G
 D => E
  etc.

*/

function encode(str) {
    let arr = [...str];
    let result = arr.map(e => {
      switch(e) {
          case 'G': return 'A';
          case 'g': return 'a';
          case 'A': return 'G';
          case 'a': return 'g';
          
          case 'D': return 'E';
          case 'd': return 'e';
          case 'E': return 'D';
          case 'e': return 'd';
          
          case 'R': return 'Y';
          case 'r': return 'y';
          case 'Y': return 'R';
          case 'y': return 'r';
          
          case 'P': return 'O';
          case 'p': return 'o';
          case 'O': return 'P';
          case 'o': return 'p';
          
          case 'L': return 'U';
          case 'l': return 'u';
          case 'U': return 'L';
          case 'u': return 'l';
          
          case 'K': return 'I';
          case 'k': return 'i';
          case 'I': return 'K';
          case 'i': return 'k';
          
          default: return e;
      }
    });
    return result.join('');
  }
  
  function decode(str) {
    return encode(str);
  }