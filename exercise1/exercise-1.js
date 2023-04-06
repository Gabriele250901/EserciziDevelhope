// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
function calculateSalary(role) {
  let compensation = 0;
  switch (role){
    case 'ceo':
    compensation = 2200;
    break;
    case 'manager':
      compensation = 1800;
      break;
      case 'cto':
        compensation = 1800;
        break;
        case 'developer' :
          compensation = 1500;
          break;
          default :
          compensation = 1000;
  }
    return compensation
  }


const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);