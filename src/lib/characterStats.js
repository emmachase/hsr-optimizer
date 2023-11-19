export const CharacterStats = {
  getZeroes: function() {
    return {
      [Constants.Stats.ATK]: 0,
      [Constants.Stats.DEF]: 0,
      [Constants.Stats.HP]: 0,
      [Constants.Stats.HP_P]: 0,  
      [Constants.Stats.ATK_P]: 0,  
      [Constants.Stats.DEF_P]: 0,  
      [Constants.Stats.SPD]: 0,  
      [Constants.Stats.SPD_P]: 0,  
      [Constants.Stats.CR]: 0,
      [Constants.Stats.CD]: 0,
      [Constants.Stats.EHR]: 0,
      [Constants.Stats.RES]: 0,
      [Constants.Stats.BE]: 0,
      [Constants.Stats.ERR]: 0,
      [Constants.Stats.OHB]: 0,
      [Constants.Stats.Physical_DMG]: 0,
      [Constants.Stats.Fire_DMG]: 0,
      [Constants.Stats.Ice_DMG]: 0,
      [Constants.Stats.Lightning_DMG]: 0,
      [Constants.Stats.Wind_DMG]: 0,
      [Constants.Stats.Quantum_DMG]: 0,
      [Constants.Stats.Imaginary_DMG]: 0,
    }
  },

  getCharacter: function() {
    let jingliuBase = {
      base: {
        [Constants.Stats.ATK]: 679.14,
        [Constants.Stats.DEF]: 485.1,
        [Constants.Stats.HP]: 1436,
        [Constants.Stats.SPD]: 96,
        [Constants.Stats.SPD_P]: 0,  
        [Constants.Stats.CR]: 0.05,
        [Constants.Stats.CD]: 0.50,
        [Constants.Stats.EHR]: 0,
        [Constants.Stats.RES]: 0,
        [Constants.Stats.BE]: 0,
        [Constants.Stats.ERR]: 0,
        [Constants.Stats.OHB]: 0,
        [Constants.Stats.Physical_DMG]: 0,
        [Constants.Stats.Fire_DMG]: 0,
        [Constants.Stats.Ice_DMG]: 0,
        [Constants.Stats.Lightning_DMG]: 0,
        [Constants.Stats.Wind_DMG]: 0,
        [Constants.Stats.Quantum_DMG]: 0,
        [Constants.Stats.Imaginary_DMG]: 0,
      },
      traces: {
        [Constants.Stats.ATK]: 0,
        [Constants.Stats.DEF]: 0,
        [Constants.Stats.HP]: 0,
        [Constants.Stats.HP_P]: 0.10,  
        [Constants.Stats.ATK_P]: 0,  
        [Constants.Stats.DEF_P]: 0,  
        [Constants.Stats.SPD]: 9,  
        [Constants.Stats.SPD_P]: 0,  
        [Constants.Stats.CR]: 0,
        [Constants.Stats.CD]: 0.373,
        [Constants.Stats.EHR]: 0,
        [Constants.Stats.RES]: 0,
        [Constants.Stats.BE]: 0,
        [Constants.Stats.ERR]: 0,
        [Constants.Stats.OHB]: 0,
        [Constants.Stats.Physical_DMG]: 0,
        [Constants.Stats.Fire_DMG]: 0,
        [Constants.Stats.Ice_DMG]: 0,
        [Constants.Stats.Lightning_DMG]: 0,
        [Constants.Stats.Wind_DMG]: 0,
        [Constants.Stats.Quantum_DMG]: 0,
        [Constants.Stats.Imaginary_DMG]: 0,
      },
      lightCone: {
        [Constants.Stats.ATK]: 582.12,
        [Constants.Stats.DEF]: 396.9,
        [Constants.Stats.HP]: 1164.24,
        [Constants.Stats.HP_P]: 0,  
        [Constants.Stats.ATK_P]: 0,  
        [Constants.Stats.DEF_P]: 0,  
        [Constants.Stats.SPD]: 0,  
        [Constants.Stats.SPD_P]: 0,  
        [Constants.Stats.CR]: 0,
        [Constants.Stats.CD]: 0.2,
        [Constants.Stats.EHR]: 0,
        [Constants.Stats.RES]: 0,
        [Constants.Stats.BE]: 0,
        [Constants.Stats.ERR]: 0,
        [Constants.Stats.OHB]: 0,
        [Constants.Stats.Physical_DMG]: 0,
        [Constants.Stats.Fire_DMG]: 0,
        [Constants.Stats.Ice_DMG]: 0,
        [Constants.Stats.Lightning_DMG]: 0,
        [Constants.Stats.Wind_DMG]: 0,
        [Constants.Stats.Quantum_DMG]: 0,
        [Constants.Stats.Imaginary_DMG]: 0,
      }
    }

    return jingliuBase
  }
}

// HP_P: 'HP%',
// ATK_P: 'ATK%',
// DEF_P: 'DEF%',
// HP: 'HP',
// ATK: 'ATK',
// DEF: 'DEF',
// SPD: 'SPD',
// CD: 'CRIT DMG',
// CR: 'CRIT Rate',
// EHR: 'Effect Hit Rate',
// RES: 'Effect RES',
// BE: 'Break Effect',
// ERR: 'Energy Regeneration Rate',
// OHB: 'Outgoing Healing Boost',
// Physical_DMG: 'Physical DMG Boost',
// Fire_DMG: 'Fire DMG Boost',
// Ice_DMG: 'Ice DMG Boost',
// Lightning_DMG: 'Lightning DMG Boost',
// Wind_DMG: 'Wind DMG Boost',
// Quantum_DMG: 'Quantum DMG Boost',
// Imaginary_DMG: 'Imaginary DMG Boost'