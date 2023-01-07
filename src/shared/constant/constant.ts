export const constant = {
  // notification code send to response or error throw front end check multiple language
  notification: {
    registerSuccessMessage: '104101', //          Your registration was successful!
    isExsitingEmail: '104102', //          Email is already  exsit
    isValidEmail: '104103', //          Email is inValid
    invalidLogin: '104104', //          Login credentials entered are incorrect
    isLoginSuccessFul: '104105', //          login  was successful
    isForgotSuccessFul: '104106', //          A link has been sent to your registered email address to reset password.
    isPassWordMisMatch: '104107', //          Password is not matched
    passwordResetSuccess: '104108', //          Your password is Reseteds
    cgpAddProfileDetails: '104109', //          cgp Added Profile Details
    cgpEmailVerified: '104110', //          CGP Account Is Verified.
    internalError: '104111', //          Internal Server Error.
    cgpProfileUpdated: '104112', //          CGP Profile Is Updated.
    isSuccessFul: '104113', //          Sucsess Message
    userNotFound: '104114', //          User not found
    UserEmailVerified: '104115',
    EmailVerifiedSuccess: '104116', //          Email verification success
    UserRegisterSuccess: '104117', //          User registration successfull
    cgpRequestSuccess: '104118', //          cgp new request successfull
    isCGPApproved: '104119', //          cgp user request is Approved
    isCGPRejected: '104120', //          cgp user request is Rejected
    invalidInput: '104121', //           Input is not valid
    CGPNotFound: '104122', //           Input is not valid
    CGPUpdateSuccess: '104123', //           Input is not valid
    wrongOldPassword: '104124', //          Old Password does not match
    passwordChangeSuccess: '104125',
    validToken: '104126', //          validToken
    inValidToken: '104127', //          Password Changed successfully
    inValidAddress: '104128', //          invalid address
    articleDeleteSuccess: '104129', //           Article deleted successfully,
    articleListSuccess: '104130', //           Article list fetched successfully
    articleDetailsSuccess: '104131', //           Article details fetched successfully
    articleRequestSuccess: '104132', //          Article Created successfully
    articleUpdateSuccess: '104133', //           Article Updated successfully
    articleNotFound: '104134', //           Article Not found
    isCgpNameExists: '104135', //          establishmentName is already  exsit
    isArticleTitleExists: '104136', //          article title is already  exsit
    emailNotExists: '104138', //    Email Not exists
    isExsitingSiret: '104139', //          Siret is already  exsit
    teamRemovedSuccess: '104140', //      removed sussecfully
    teamNotFount: '104141',
    teamExists: '104142',
    favouriteAlreadyExists: '104143',
    vacationAlreadyExists: '104144',
    customAvailabilityExists: '104145',
    teamRegistreadSuccess: '104146',
    vacationDeleteSuccess: '104147', //           vacation deleted successfully,
    customAvailabilityDeleteSuccess: '104148', //           custom availability deleted successfully,
    scheduleNotExists: '104149', //           custom availability deleted successfully,
    teamAvailabilityDeleteSuccess: '104150', //           custom availability deleted successfully,
    teamInviteSuccessFul: '104160', //          Sucsess Message
    teamAvailabilityExists: '104151', //           custom availability deleted successfully,
    teamAvailabilitySchedulesAdd: '104152', //           custom availability deleted successfully,
    userIsInActive: '104162',
    noSlotFound: '104163',
    pastDatesNotAllowed: '104164',
    teamInviteSuccessFulss: '104190',
    cancelSuccess: '104191',
    modifySuccess: '104192',
    duplicateAppointment: '104193',
    bookedAppointmentAvailable: '104194',
    appointmentAlreadyAvailableCustom: '104195',
    vacationAddppointmentExists: '104196',
    appointmentNotFound: '104197',
    alreadySyncCalendar: '104198',
    emailPresentwithAnotherSignupType: '104199',
    errorOnLinkedinLogin: '104200',

  },
  mailTemplate: {
    userRegisteredTemplate: '816914', //          Email Template in User registered Service
    forgotPasswordTemplate: '761979', //          Email Template in User forgotPassword Service
    cgpRequestTemplate: '181837', //          Email Template in User resetedPassword Service
    adminCGPProfileVerifiedTemplate: '393665', //          Cgp Account Email Verify Admin
    cgpSetPasswordTemplate: '495934', //          Cgp Account Email Verify Admin
    userResetPasswordTemplate: '105106', //          Cgp Account Email Verify Admin
    teamUserRegisteredTemplate: '816915', //          Email Template in Team User register Service
    teamUserRegisteredSuccesTemplate: '816916', //          Email Template in Team User register Service
    teamBookAppointment: '816918', //          ``Team book appointment service
    userBookAppointment: '816917', //          ``User book appointment service
    teamModifyAppointment: '816920', //          Team modify appointment service
    userModifyAppointment: '816919', //          User modify appointment service
    teamCancelAppointment: '816922', //          Team cancel appointment service
    userCancelAppointment: '816921', //          User cancel appointment service,
    videoCallNotifyUser: '816923',               // user notify for video call
    videoCallNotifyAdviser: '816924',               // user notify for video call
    userDayAppointmentReminder: '816925',               // appointment reminder
    userHourAppointmentReminder: '816926',               // appointment reminder
    adviserDayAppointmentReminder: '816927',               // appointment reminder
    partnerRequestMail: '816928',               // Partner request email
    partnerAddsCGPMail: '816930',               // Partner adds CGP email
    cgpAddsPartnerMail: '816931',               // CGP adds Partner email
    cgpRemovesPartnerMail: '816932',               // CGP removes Partner email
    partnerRemovesCGPMail: '816933',               // CGP removes Partner email
    partnerApproveMail: '816934',               // Partner approval email
    cgpApproveRejectMail: '816935',               // CGP approval email
  },
  jwtConstants: {
    secret: 'secretKey',
  },
  presentation: {
    presentationText: 'Votre expert en gestion de patrimoine se tient à votre disposition pour une présentation détaillée de ses compétences et de sa sphère d’intervention'
  },
  messages : {
    API: {
      users: {
        getSuccess: "User details fetched successfully", 
        notVerified: "User is not verified", 
        wrongCredentials: "Invalid credentials", 
        noAccount: "It seems that you don't have an account try sign up", 
        OTPverified: "OTP has been verified", 
        OTPverificationFail: "OTP verification failed", 
        OTPsent: "OTP sent to the users", 
        createUser: "User Created Successfully", 
        emailExists: "This email already exits"
      },
      employee: {
        createSuccess:  "Employee Created Successfully",
        getEmployees: "Employee Lists fetched successfully",
        editEmployee: "Employee updated fetched successfully",
        deleteEmployee: "Employee deleted fetched successfully"
      }
    }
  }
};
