/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/

const roundTo3Dc = function(number) {
  return +(Math.round(number + "e+3") + "e-3");
};

const convertLength = function(qty, conversion) {
  if (conversion === 'metersToFeet') {
    const oneMeterInFeet = 3.28084;
    return roundTo3Dc(qty * oneMeterInFeet);
  } else {
    const oneFootInMeter = 0.3048;
    return roundTo3Dc(qty * oneFootInMeter);
  }
};

const convertVolume = function(qty, conversion) {
  if (conversion === 'litersToGallons') {
    const oneLiterInGallon = 0.264172;
    return roundTo3Dc(qty * oneLiterInGallon);
  } else {
    const oneGallonInLiter = 3.785411784;
    return roundTo3Dc(qty * oneGallonInLiter);
  }
};

const convertMass = function(qty, conversion) {
  if (conversion === 'kilogramsInPounds') {
    const oneKilogramInPound = 2.20462;
    return roundTo3Dc(qty * oneKilogramInPound);
  } else {
    const onePoundInKilogram = 0.453592;
    return roundTo3Dc(qty * onePoundInKilogram);
  }
};

const displayResults = function() {
  // Select elements
  const lengthP = document.querySelector('#length-el');
  const volumeP = document.querySelector('#volume-el');
  const massP = document.querySelector('#mass-el');
  const qtyInput = document.querySelector('#unit-input');

  // Calculate quantity
  const qty = qtyInput.value;
  const metersInFeet = convertLength(qty, 'metersToFeet');
  const feetInMeters = convertLength(qty, 'feetToMeters');
  const litersInGallons = convertVolume(qty, 'litersToGallons');
  const gallonsInLiters = convertVolume(qty, 'gallonsToLiters');
  const kilogramsInPounds = convertMass(qty, 'kilogramsInPounds');
  const poundsInkilograms = convertMass(qty, 'poundsInKilograms');

  // Update text
  lengthP.textContent = `${qty} meters = ${metersInFeet} feet |
                         ${qty} feet = ${feetInMeters} meters`;
  volumeP.textContent = `${qty} liters = ${litersInGallons} gallons |
                         ${qty} gallons = ${gallonsInLiters} liters`;
  massP.textContent = `${qty} kilos = ${kilogramsInPounds} pounds |
                       ${qty} pounds = ${poundsInkilograms} kilos`;

  // Clear input value
  qtyInput.value = '';
};

const btn = document.querySelector('button');
btn.addEventListener('click', displayResults);