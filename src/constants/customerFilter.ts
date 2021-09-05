import { AgeRanges, Income } from 'pages/Main/types';

export const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'both', label: 'Both' },
];

export const relationsOptions = [
  { value: 'single', label: 'Single' },
  { value: 'married', label: 'Married' },
];

export const ethnicityOptions = [
  { value: 'hispanic', label: 'Hispanic' },
  { value: 'asian', label: 'Asian' },
  { value: 'white', label: 'White' },
];

export const incomeOptions = [
  { value: Income['Less than $20k'], label: Income['Less than $20k'] },
  { value: Income['$20k - $29k'], label: Income['$20k - $29k'] },
  { value: Income['$30k - $39k'], label: Income['$30k - $39k'] },
  { value: Income['$40k - $49k'], label: Income['$40k - $49k'] },
  { value: Income['$50k - $74k'], label: Income['$50k - $74k'] },
  { value: Income['$75k - $99k'], label: Income['$75k - $99k'] },
  { value: Income['$100k - $124k'], label: Income['$100k - $124k'] },
  { value: Income['$125k or More'], label: Income['$125k or More'] },
];

export const ageOptions = [
  { value: AgeRanges['18-20'], label: AgeRanges['18-20'] },
  { value: AgeRanges['21-25'], label: AgeRanges['21-25'] },
  { value: AgeRanges['26-30'], label: AgeRanges['26-30'] },
  { value: AgeRanges['31-35'], label: AgeRanges['31-35'] },
  { value: AgeRanges['36-40'], label: AgeRanges['36-40'] },
  { value: AgeRanges['41-45'], label: AgeRanges['41-45'] },
  { value: AgeRanges['46-50'], label: AgeRanges['46-50'] },
  { value: AgeRanges['51-55'], label: AgeRanges['51-55'] },
];
