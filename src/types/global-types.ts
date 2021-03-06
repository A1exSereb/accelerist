export interface components {
  schemas: {
    SignInDto: { email: string; password: string };
    SignUpDto: { email: string; password: string };
    PasswordChangeDto: { password: string; passwordConfirmation: string };
    PasswordResetDto: { email: string };
    AwsKeyDto: { key: string };
    UpdateUserDto: {
      firstName: string;
      lastName: string;
      email: string;
      linkedinLink: string;
      isReceivingNotifications?: boolean;
    };
    FileUploadDto: { file: string };
    GetSubscriptionTeamDto: {
      id: string;
      name: string;
      isProspecting: boolean;
      isAudience: boolean;
      isRoi: boolean;
      isPrices: boolean;
    };
    GetManyUserResponseDto: {
      data: components['schemas']['User'][];
      count: number;
      total: number;
      page: number;
      pageCount: number;
    };
    User: { [key: string]: any };
    LoginHistoryDto: {
      id: string;
      userId: string;
      user: components['schemas']['User'];
      loggedInAt: string;
    };
    TypesOfInvestmentDto: { id: string; title: string };
    MissionFocusDto: { label: string; value: string };
    OpportunitiesDto: { text: string };
    ImpactStatementsDto: { text: string };
    UpdateTeamDto: {
      organizationName: string;
      numberConstituents: string;
      email: string;
      twitterLink: string;
      twitterHandle: string;
      linkedinLink: string;
      aieldActivity: string;
      annualTotalContributions: string;
      contactName: string;
      contactPhone: string;
      contactWebsite: string;
      goalAlignment?: (
        | 'noPoverty'
        | 'zeroHunger'
        | 'goodHealthAndWellBeing'
        | 'qualityEducation'
        | 'genderEquality'
        | 'cleanWaterAndSanitation'
        | 'affordableAndCleanEnergy'
        | 'decentWorkAndEconomicGrowth'
        | 'industryInnovationAndInfrastructure'
        | 'reducedInequalities'
        | 'sustainableCitiesAndCommunities'
        | 'responsibleConsumptionAndProduction'
        | 'climateAction'
        | 'lifeBelowWater'
        | 'lifeOnLand'
        | 'peaceJusticeAndStrongInstitutions'
        | 'partnershipsForTheGoals'
      )[];
      typesOfInvestment?: components['schemas']['TypesOfInvestmentDto'][];
      address: string;
      zip: string;
      primaryMissionFocus?: components['schemas']['MissionFocusDto'];
      secondaryMissionFocus?: components['schemas']['MissionFocusDto'][];
      employeeEngagementOpportunities?: boolean;
      charitablePartners?: string[];
      opportunities?: components['schemas']['OpportunitiesDto'][];
      impactStatements?: components['schemas']['ImpactStatementsDto'][];
    };
    UserEmailDto: { email: string };
    GetExcelDto: {
      /**
       * Name of the file
       */
      name: string;
      /**
       * A base64 string containing excel data
       */
      file: string;
    };
    CreateUserDto: { [key: string]: any };
    UpdateUsersDto: { [key: string]: any };
    UpdateSubscriptionTeamsDto: {
      name?: string;
      isProspecting?: boolean;
      isAudience?: boolean;
      isRoi?: boolean;
      isPrices?: boolean;
    };
    GetManyTeamResponseDto: {
      data: components['schemas']['Team'][];
      count: number;
      total: number;
      page: number;
      pageCount: number;
    };
    Team: { [key: string]: any };
    GetManyCompanyResponseDto: {
      data: components['schemas']['Company'][];
      count: number;
      total: number;
      page: number;
      pageCount: number;
    };
    Company: { [key: string]: any };
    CompanyDescriptionDto: { description: string };
    CompanySocialMediaDto: { type: string; url: string; followerCount: string };
    CreateCompanyDto: {
      name: string;
      logo?: string;
      twitterHandle?: string;
      ticker?: string;
      phone?: string;
      fax?: string;
      website?: string;
      street?: string;
      city?: string;
      state?: string;
      country?: string;
      continent?: string;
      zipCode?: string;
      revenueRange?: string;
      employeeRange?: string;
      descriptionList?: components['schemas']['CompanyDescriptionDto'][];
      socialMediaUrls?: components['schemas']['CompanySocialMediaDto'][];
      industries?: string[];
      primaryIndustry?: string[];
      subUnitIndustries?: string[];
      annualContributions?: string;
      cashContributions?: string;
      inKindContributions?: string;
      employeeContributions?: string;
      sdgGoals?: (
        | 'noPoverty'
        | 'zeroHunger'
        | 'goodHealthAndWellBeing'
        | 'qualityEducation'
        | 'genderEquality'
        | 'cleanWaterAndSanitation'
        | 'affordableAndCleanEnergy'
        | 'decentWorkAndEconomicGrowth'
        | 'industryInnovationAndInfrastructure'
        | 'reducedInequalities'
        | 'sustainableCitiesAndCommunities'
        | 'responsibleConsumptionAndProduction'
        | 'climateAction'
        | 'lifeBelowWater'
        | 'lifeOnLand'
        | 'peaceJusticeAndStrongInstitutions'
        | 'partnershipsForTheGoals'
      )[];
      typesOfInvestment?: components['schemas']['TypesOfInvestmentDto'][];
      crsFocus?: string[];
      charitablePartners?: string[];
      partnershipLink?: string;
      employeeEngagementOpportunities?: boolean;
    };
    UpdateCompanyDto: {
      name: string;
      logo?: string;
      twitterHandle?: string;
      ticker?: string;
      phone?: string;
      fax?: string;
      website?: string;
      street?: string;
      city?: string;
      state?: string;
      country?: string;
      continent?: string;
      zipCode?: string;
      revenueRange?: string;
      employeeRange?: string;
      descriptionList?: components['schemas']['CompanyDescriptionDto'][];
      socialMediaUrls?: components['schemas']['CompanySocialMediaDto'][];
      industries?: string[];
      primaryIndustry?: string[];
      subUnitIndustries?: string[];
      annualContributions?: string;
      cashContributions?: string;
      inKindContributions?: string;
      employeeContributions?: string;
      sdgGoals?: (
        | 'noPoverty'
        | 'zeroHunger'
        | 'goodHealthAndWellBeing'
        | 'qualityEducation'
        | 'genderEquality'
        | 'cleanWaterAndSanitation'
        | 'affordableAndCleanEnergy'
        | 'decentWorkAndEconomicGrowth'
        | 'industryInnovationAndInfrastructure'
        | 'reducedInequalities'
        | 'sustainableCitiesAndCommunities'
        | 'responsibleConsumptionAndProduction'
        | 'climateAction'
        | 'lifeBelowWater'
        | 'lifeOnLand'
        | 'peaceJusticeAndStrongInstitutions'
        | 'partnershipsForTheGoals'
      )[];
      typesOfInvestment?: components['schemas']['TypesOfInvestmentDto'][];
      crsFocus?: string[];
      charitablePartners?: string[];
      partnershipLink?: string;
      employeeEngagementOpportunities?: boolean;
    };
    GetSavedListDto: {
      id: string;
      name: string;
      filters: { [key: string]: any };
      prospectsAvailable: number;
      lastAuthor: components['schemas']['User'];
      createdAt: string;
      updatedAt: string;
    };
    CreateSavedListDto: {
      filters: { [key: string]: any };
      prospectsAvailable: number;
    };
    UpdateSavedListDto: {
      filters: { [key: string]: any };
      prospectsAvailable: number;
      name: string;
    };
    GetManyContactResponseDto: {
      data: components['schemas']['Contact'][];
      count: number;
      total: number;
      page: number;
      pageCount: number;
    };
    Contact: { [key: string]: any };
    ContactGetDto: {
      id: string;
      zoomInfoId: string;
      firstName: string;
      middleName: string | null;
      lastName: string;
      jobTitle: string | null;
      email: string;
      phone: string | null;
      contactAccuracyScore: number;
      linkedinUrl: string | null;
    };
    CreateContactDto: {
      firstName: string;
      middleName?: string;
      lastName: string;
      email: string;
      phone?: string;
      jobTitle?: string;
      linkedinUrl?: string;
    };
    UpdateContactDto: {
      firstName?: string;
      middleName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      jobTitle?: string;
      linkedinUrl?: string;
    };
  };
}
