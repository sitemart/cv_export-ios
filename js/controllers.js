angular.module('app.controllers', [])

    .controller('aboutCtrl', function ($scope, $rootScope, $ionicPopup, $http, $ionicLoading) {

        $ionicLoading.show({
            template: 'Loading...'
        });
        $scope.data = {
            showDelete: false,
            showEdit: false
        };

        $scope.getAbouts = function () {

            $ionicLoading.show({
                template: 'Loading...'
            });
            var About2 = Parse.Object.extend("About2");
            var query = new Parse.Query(About2);
            query.limit(30);
            query.find({
                success: function(data) {
                    var About = JSON.stringify(data),
                        abouts = JSON.parse(About);
                    $scope.abouts = abouts;
                    setTimeout(function () {
                        $ionicLoading.hide();
                    }, 1000);
                },
                error: function(error) {
                    $ionicLoading.hide();
                }
            });

        };
        $scope.getAbouts();



        // ABOUT UPDATE
        $scope.onItemUpdate = function (about) {

            var updatePopUP = $ionicPopup.show({
                scope: $scope,
                cssClass: 'wideInputPopup',
                template: '<form>' +
                '<div class="list">' +
                '<label class="item item-select title popupselect">' +
                '<span class="input-label">Salutation</span>' +
                '<select class="Salutation">' +
                '<option value="Mr">Mr</option>' +
                '<option value="Ms">Ms</option>' +
                '<option value="Mrs">Mrs</option>' +
                '<option value="Dr">Dr</option>' +
                '<option value="Prof">Prof</option>' +
                '<option value="Judge">Judge</option>' +
                '<option value="Advocate">Advocate</option>' +
                '</select> </label> ' +
                '<div class="row nomargin nopadding"> ' +
                '<div class="col nomargin nopadding input-left">' +
                '<input type="text" class="firstName" placeholder="First Names" value="'+ about.firstName +'">' +
                '</div>' +
                '<div class="col nomargin nopadding">' +
                '<input type="text" class="middleName" placeholder="Middle Names" value="'+ about.middleName +'">' +
                '</div></div><div class="row nomargin nopadding">' +
                '<div class="col nomargin nopadding">' +
                '<input type="text" class="lastName" placeholder="Last Name" value="'+ about.lastName +'">' +
                '</div>' +
                '</div>' +
                '<div class="row nomargin nopadding"> ' +
                '<div class="col nomargin nopadding input-left"> ' +
                '<label class="item item-select title popupselect"> ' +
                '<span class="input-label">Gender</span> ' +
                '<select class="gender"> ' +
                '<option value="Male">Male</option> ' +
                '<option value="Female">Female</option> ' +
                '</select> ' +
                '</label> </div> ' +
                '<div class="col nomargin nopadding"> ' +
                '<input type="date" class="dateOfBirth" placeholder="Date of Birth"  value="'+ about.dateOfBirth +'"> ' +
                '</div> </div> <div class="row nomargin nopadding"> <div class="col nomargin nopadding input-left">' +
                '<input type="text" class="language" placeholder="First Language " value="'+ about.language +'"></div> ' +
                '<div class="col nomargin nopadding">' +
                '<input type="text" class="religion" placeholder="Religion" value="'+ about.religion +'"></div> </div> ' +
                '<div class="row nomargin nopadding"> <div class="col nomargin nopadding input-left"> ' +
                            '<input type="text" class="nationality" placeholder="Nationality" value="'+ about.nationality +'">' +

                '</div> <div class="col nomargin nopadding">  ' +
                '<input type="text" class="ethnicity" placeholder="Ethnicity" value="'+ about.ethnicity +'" /> </div> </div>' +
                '<div class="row nomargin nopadding"><div class="col nomargin nopadding input-left">' +
                '<input type="text" class="homePhone" placeholder="Phone (H)" value="'+ about.homePhone +'"></div><div class="col nomargin nopadding"><input type="text" class="mobilePhone" value="'+ about.mobilePhone +'" placeholder="Phone (M)"></div></div><div class="row nomargin nopadding"><div class="col nomargin nopadding input-left"><input type="text" class="emailAddress" value="'+ about.emailAddress + '" placeholder="Email Address"></div><div class="col nomargin nopadding"><input type="text"  value="'+ about.website + '" class="website" placeholder="Website"></div></div> <textarea placeholder="Postal Address" class="postalAddress">' + about.postalAddress + '</textarea> <textarea placeholder="Physical Address (Optional)" class="homeAddress">' + about.homeAddress + '</textarea></div></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Updating...'
                            });
                            var salutation = $('.salutation').val();
                            var firstName = $('.firstName').val();
                            var middleName = $('.middleName').val();
                            var lastName = $('.lastName').val();
                            var profilePicture = $('.profilePicture').val();
                            var gender = $('.gender').val();
                            var dateOfBirth = $('.dateOfBirth').val();
                            var maritalStatus = $('.maritalStatus').val();
                            var language = $('.language').val();
                            var religion = $('.religion').val();
                            var ethnicity = $('.ethnicity').val();
                            var nationality = $('.nationality').val();
                            var homeAddress = $('.homeAddress').val();
                            var postalAddress = $('.postalAddress').val();
                            var homePhone = $('.homePhone').val();
                            var mobilePhone = $('.mobilePhone').val();
                            var workPhone = $('.workPhone').val();
                            var emailAddress = $('.emailAddress').val();
                            var website = $('.website').val();
                            var disability = $('.disability').val();
                            var medicalCondition = $('.medicalCondition').val();

                            var query = new Parse.Query("About2");
                            query.get(about.objectId, {
                                success: function(object) {
                                    object.set("salutation", salutation);
                                    object.set("firstName", firstName);
                                    object.set("middleName", middleName);
                                    object.set("lastName", lastName);
                                    object.set("profilePicture", profilePicture);
                                    object.set("gender", gender);
                                    object.set("dateOfBirth", dateOfBirth);
                                    object.set("maritalStatus", maritalStatus);
                                    object.set("language", language);
                                    object.set("religion", religion);
                                    object.set("ethnicity", ethnicity);
                                    object.set("nationality", nationality);
                                    object.set("homeAddress", homeAddress);
                                    object.set("postalAddress", postalAddress);
                                    object.set("homePhone", homePhone);
                                    object.set("mobilePhone", mobilePhone);
                                    object.set("workPhone", workPhone);
                                    object.set("emailAddress", emailAddress);
                                    object.set("website", website);
                                    object.set("disability", disability);
                                    object.set("medicalCondition", medicalCondition);
                                    object.save();
                                    $scope.getAbouts();
                                    $scope.data = {
                                        showDelete: false,
                                        showEdit: false
                                    };
                                },
                                error: function(error) {
                                    $ionicLoading.hide();
                                }
                            });


                        }
                    }
                ]
            });
        };


        // FORM POSTS
        $scope.itemAdd = function (item) {
            var myPopup = $ionicPopup.show({
                cssClass: 'wideInputPopup',
                template: '<form>' +
                '<div class="list">' +
                '<label class="item item-select title popupselect">' +
                '<span class="input-label">Salutation</span>' +
                '<select class="Salutation">' +
                '<option value="Mr">Mr</option><option value="Ms">Ms</option><option value="Mrs">Mrs</option><option value="Dr">Dr</option><option value="Prof">Prof</option><option value="Judge">Judge</option><option value="Advocate">Advocate</option></select> </label> <div class="row nomargin nopadding"> <div class="col nomargin nopadding input-left"><input type="text" class="firstName" placeholder="First Names"></div><div class="col nomargin nopadding"><input type="text" class="middleName" placeholder="Middle Names"></div></div><div class="row nomargin nopadding"><div class="col nomargin nopadding"><input type="text" class="lastName" placeholder="Last Name"></div></div><div class="row nomargin nopadding"> <div class="col nomargin nopadding input-left"> <label class="item item-select title popupselect"> <span class="input-label">Gender</span> <select class="gender"> <option value="Male">Male</option> <option value="Female">Female</option> </select> </label> </div> <div class="col nomargin nopadding"> <input type="date" class="dateOfBirth" placeholder="Date of Birth"> </div> </div> <div class="row nomargin nopadding"> <div class="col nomargin nopadding input-left"><input type="text" class="language" placeholder="First Language "></div> <div class="col nomargin nopadding"><input type="text" class="religion" placeholder="Religion"></div> </div> <div class="row nomargin nopadding"> <div class="col nomargin nopadding input-left"> <label class="item item-select title popupselect"> <span class="input-label">Nationality</span> ' +
                '<select class="nationality"> <option value=""></option> <option value="United States">United States</option> <option value="United Kingdom">United Kingdom</option> <option value="Afghanistan">Afghanistan</option> <option value="Albania">Albania</option> <option value="Algeria">Algeria</option> <option value="American Samoa">American Samoa</option> <option value="Andorra">Andorra</option> <option value="Angola">Angola</option> <option value="Anguilla">Anguilla</option> <option value="Antarctica">Antarctica</option> <option value="Antigua and Barbuda">Antigua and Barbuda</option> <option value="Argentina">Argentina</option> <option value="Armenia">Armenia</option> <option value="Aruba">Aruba</option> <option value="Australia">Australia</option> <option value="Austria">Austria</option> <option value="Azerbaijan">Azerbaijan</option> <option value="Bahamas">Bahamas</option> <option value="Bahrain">Bahrain</option> <option value="Bangladesh">Bangladesh</option> <option value="Barbados">Barbados</option> <option value="Belarus">Belarus</option> <option value="Belgium">Belgium</option> <option value="Belize">Belize</option> <option value="Benin">Benin</option> <option value="Bermuda">Bermuda</option> <option value="Bhutan">Bhutan</option> <option value="Bolivia">Bolivia</option> <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> <option value="Botswana">Botswana</option> <option value="Bouvet Island">Bouvet Island</option> <option value="Brazil">Brazil</option> <option value="British Indian Ocean Territory">British Indian Ocean Territory</option> <option value="Brunei Darussalam">Brunei Darussalam</option> <option value="Bulgaria">Bulgaria</option> <option value="Burkina Faso">Burkina Faso</option> <option value="Burundi">Burundi</option> <option value="Cambodia">Cambodia</option> <option value="Cameroon">Cameroon</option> <option value="Canada">Canada</option> <option value="Cape Verde">Cape Verde</option> <option value="Cayman Islands">Cayman Islands</option> <option value="Central African Republic">Central African Republic</option> <option value="Chad">Chad</option> <option value="Chile">Chile</option> <option value="China">China</option> <option value="Christmas Island">Christmas Island</option> <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option> <option value="Colombia">Colombia</option> <option value="Comoros">Comoros</option> <option value="Congo">Congo</option> <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option> <option value="Cook Islands">Cook Islands</option> <option value="Costa Rica">Costa Rica</option> <option value="Cote D.ivoire">Cote D.ivoire</option> <option value="Croatia">Croatia</option> <option value="Cuba">Cuba</option> <option value="Cyprus">Cyprus</option> <option value="Czech Republic">Czech Republic</option> <option value="Denmark">Denmark</option> <option value="Djibouti">Djibouti</option> <option value="Dominica">Dominica</option> <option value="Dominican Republic">Dominican Republic</option> <option value="Ecuador">Ecuador</option> <option value="Egypt">Egypt</option> <option value="El Salvador">El Salvador</option> <option value="Equatorial Guinea">Equatorial Guinea</option> <option value="Eritrea">Eritrea</option> <option value="Estonia">Estonia</option> <option value="Ethiopia">Ethiopia</option> <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option> <option value="Faroe Islands">Faroe Islands</option> <option value="Fiji">Fiji</option> <option value="Finland">Finland</option> <option value="France">France</option> <option value="French Guiana">French Guiana</option> <option value="French Polynesia">French Polynesia</option> <option value="French Southern Territories">French Southern Territories</option> <option value="Gabon">Gabon</option> <option value="Gambia">Gambia</option> <option value="Georgia">Georgia</option> <option value="Germany">Germany</option> <option value="Ghana">Ghana</option> <option value="Gibraltar">Gibraltar</option> <option value="Greece">Greece</option> <option value="Greenland">Greenland</option> <option value="Grenada">Grenada</option> <option value="Guadeloupe">Guadeloupe</option> <option value="Guam">Guam</option> <option value="Guatemala">Guatemala</option> <option value="Guinea">Guinea</option> <option value="Guinea-bissau">Guinea-bissau</option> <option value="Guyana">Guyana</option> <option value="Haiti">Haiti</option> <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option> <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option> <option value="Honduras">Honduras</option> <option value="Hong Kong">Hong Kong</option> <option value="Hungary">Hungary</option> <option value="Iceland">Iceland</option> <option value="India">India</option> <option value="Indonesia">Indonesia</option> <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option> <option value="Iraq">Iraq</option> <option value="Ireland">Ireland</option> <option value="Israel">Israel</option> <option value="Italy">Italy</option> <option value="Jamaica">Jamaica</option> <option value="Japan">Japan</option> <option value="Jordan">Jordan</option> <option value="Kazakhstan">Kazakhstan</option> <option value="Kenya">Kenya</option> <option value="Kiribati">Kiribati</option> <option value="Korea, Democratic People.s Republic of">Korea, Democratic People.s Republic of</option> <option value="Korea, Republic of">Korea, Republic of</option> <option value="Kuwait">Kuwait</option> <option value="Kyrgyzstan">Kyrgyzstan</option> <option value="Lao People.s Democratic Republic">Lao People.s Democratic Republic</option> <option value="Latvia">Latvia</option> <option value="Lebanon">Lebanon</option> <option value="Lesotho">Lesotho</option> <option value="Liberia">Liberia</option> <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option> <option value="Liechtenstein">Liechtenstein</option> <option value="Lithuania">Lithuania</option> <option value="Luxembourg">Luxembourg</option> <option value="Macao">Macao</option> <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option> <option value="Madagascar">Madagascar</option> <option value="Malawi">Malawi</option> <option value="Malaysia">Malaysia</option> <option value="Maldives">Maldives</option> <option value="Mali">Mali</option> <option value="Malta">Malta</option> <option value="Marshall Islands">Marshall Islands</option> <option value="Martinique">Martinique</option> <option value="Mauritania">Mauritania</option> <option value="Mauritius">Mauritius</option> <option value="Mayotte">Mayotte</option> <option value="Mexico">Mexico</option> <option value="Micronesia, Federated States of">Micronesia, Federated States of</option> <option value="Moldova, Republic of">Moldova, Republic of</option> <option value="Monaco">Monaco</option> <option value="Mongolia">Mongolia</option> <option value="Montenegro">Montenegro</option> <option value="Montserrat">Montserrat</option> <option value="Morocco">Morocco</option> <option value="Mozambique">Mozambique</option> <option value="Myanmar">Myanmar</option> <option value="Namibia">Namibia</option> <option value="Nauru">Nauru</option> <option value="Nepal">Nepal</option> <option value="Netherlands">Netherlands</option> <option value="Netherlands Antilles">Netherlands Antilles</option> <option value="New Caledonia">New Caledonia</option> <option value="New Zealand">New Zealand</option> <option value="Nicaragua">Nicaragua</option> <option value="Niger">Niger</option> <option value="Nigeria">Nigeria</option> <option value="Niue">Niue</option> <option value="Norfolk Island">Norfolk Island</option> <option value="Northern Mariana Islands">Northern Mariana Islands</option> <option value="Norway">Norway</option> <option value="Oman">Oman</option> <option value="Pakistan">Pakistan</option> <option value="Palau">Palau</option> <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option> <option value="Panama">Panama</option> <option value="Papua New Guinea">Papua New Guinea</option> <option value="Paraguay">Paraguay</option> <option value="Peru">Peru</option> <option value="Philippines">Philippines</option> <option value="Pitcairn">Pitcairn</option> <option value="Poland">Poland</option> <option value="Portugal">Portugal</option> <option value="Puerto Rico">Puerto Rico</option> <option value="Qatar">Qatar</option> <option value="Reunion">Reunion</option> <option value="Romania">Romania</option> <option value="Russian Federation">Russian Federation</option> <option value="Rwanda">Rwanda</option> <option value="Saint Helena">Saint Helena</option> <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> <option value="Saint Lucia">Saint Lucia</option> <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option> <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option> <option value="Samoa">Samoa</option> <option value="San Marino">San Marino</option> <option value="Sao Tome and Principe">Sao Tome and Principe</option> <option value="Saudi Arabia">Saudi Arabia</option> <option value="Senegal">Senegal</option> <option value="Serbia">Serbia</option> <option value="Seychelles">Seychelles</option> <option value="Sierra Leone">Sierra Leone</option> <option value="Singapore">Singapore</option> <option value="Slovakia">Slovakia</option> <option value="Slovenia">Slovenia</option> <option value="Solomon Islands">Solomon Islands</option> <option value="Somalia">Somalia</option> <option value="South Africa">South Africa</option> <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option> <option value="South Sudan">South Sudan</option> <option value="Spain">Spain</option> <option value="Sri Lanka">Sri Lanka</option> <option value="Sudan">Sudan</option> <option value="Suriname">Suriname</option> <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option> <option value="Swaziland">Swaziland</option> <option value="Sweden">Sweden</option> <option value="Switzerland">Switzerland</option> <option value="Syrian Arab Republic">Syrian Arab Republic</option> <option value="Taiwan, Republic of China">Taiwan, Republic of China</option> <option value="Tajikistan">Tajikistan</option> <option value="Tanzania, United Republic of">Tanzania, United Republic of</option> <option value="Thailand">Thailand</option> <option value="Timor-leste">Timor-leste</option> <option value="Togo">Togo</option> <option value="Tokelau">Tokelau</option> <option value="Tonga">Tonga</option> <option value="Trinidad and Tobago">Trinidad and Tobago</option> <option value="Tunisia">Tunisia</option> <option value="Turkey">Turkey</option> <option value="Turkmenistan">Turkmenistan</option> <option value="Turks and Caicos Islands">Turks and Caicos Islands</option> <option value="Tuvalu">Tuvalu</option> <option value="Uganda">Uganda</option> <option value="Ukraine">Ukraine</option> <option value="United Arab Emirates">United Arab Emirates</option> <option value="United Kingdom">United Kingdom</option> <option value="United States">United States</option> <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option> <option value="Uruguay">Uruguay</option> <option value="Uzbekistan">Uzbekistan</option> <option value="Vanuatu">Vanuatu</option> <option value="Venezuela">Venezuela</option> <option value="Viet Nam">Viet Nam</option> <option value="Virgin Islands, British">Virgin Islands, British</option> <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option> <option value="Wallis and Futuna">Wallis and Futuna</option> <option value="Western Sahara">Western Sahara</option> <option value="Yemen">Yemen</option> <option value="Zambia">Zambia</option> <option value="Zimbabwe">Zimbabwe</option> </select>'+
                '</label> </div> <div class="col nomargin nopadding"> <input type="text" class="ethnicity" placeholder="Ethnicity" /> </div> </div><div class="row nomargin nopadding"><div class="col nomargin nopadding input-left"><input type="text" class="homePhone" placeholder="Phone (H)"></div><div class="col nomargin nopadding"><input type="text" class="mobilePhone" placeholder="Phone (M)"></div></div><div class="row nomargin nopadding"><div class="col nomargin nopadding input-left"><input type="text" class="emailAddress" placeholder="Email Address"></div><div class="col nomargin nopadding"><input type="text" class="website" placeholder="Website"></div></div> <textarea rows="3" placeholder="Postal Address" class="postalAddress"></textarea> <textarea rows="3" placeholder="Physical Address (Optional)" class="homeAddress"></textarea></div></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Saving...'
                            });
                            var About2 = Parse.Object.extend("About2");
                            var query = new Parse.Query(About2);
                            query.equalTo("owner", Parse.User);
                            query.count({
                                success: function(count) {
                                    if (count > 0){
                                        $ionicPopup.alert({
                                            title: 'Error',
                                            template: 'Information already exists, try re-logging in  if the problem persists'
                                        });
                                    }else{
                                        var salutation = $('.salutation').val();
                                        var firstName = $('.firstName').val();
                                        var middleName = $('.middleName').val();
                                        var lastName = $('.lastName').val();
                                        var profilePicture = $('.profilePicture').val();
                                        var gender = $('.gender').val();
                                        var dateOfBirth = $('.dateOfBirth').val();
                                        var maritalStatus = $('.maritalStatus').val();
                                        var language = $('.language').val();
                                        var religion = $('.religion').val();
                                        var ethnicity = $('.ethnicity').val();
                                        var nationality = $('.nationality').val();
                                        var homeAddress = $('.homeAddress').val();
                                        var postalAddress = $('.postalAddress').val();
                                        var homePhone = $('.homePhone').val();
                                        var mobilePhone = $('.mobilePhone').val();
                                        var workPhone = $('.workPhone').val();
                                        var emailAddress = $('.emailAddress').val();
                                        var website = $('.website').val();
                                        var disability = $('.disability').val();
                                        var medicalCondition = $('.medicalCondition').val();

                                        var EducationTraining = Parse.Object.extend("About2");
                                        var interest = new EducationTraining();
                                        var owner = Parse.User.current();
                                        interest.set("salutation", salutation);
                                        interest.set("firstName", firstName);
                                        interest.set("middleName", middleName);
                                        interest.set("lastName", lastName);
                                        interest.set("profilePicture", profilePicture);
                                        interest.set("gender", gender);
                                        interest.set("dateOfBirth", dateOfBirth);
                                        interest.set("maritalStatus", maritalStatus);
                                        interest.set("language", language);
                                        interest.set("religion", religion);
                                        interest.set("ethnicity", ethnicity);
                                        interest.set("nationality", nationality);
                                        interest.set("homeAddress", homeAddress);
                                        interest.set("postalAddress", postalAddress);
                                        interest.set("homePhone", homePhone);
                                        interest.set("mobilePhone", mobilePhone);
                                        interest.set("workPhone", workPhone);
                                        interest.set("emailAddress", emailAddress);
                                        interest.set("website", website);
                                        interest.set("disability", disability);
                                        interest.set("medicalCondition", medicalCondition);
                                        interest.set("owner", owner);
                                        interest.setACL(new Parse.ACL(owner));
                                        interest.save(null, {
                                            success: function (about) {
                                                $scope.getAbouts();
                                                $ionicLoading.hide();
                                            },
                                            error: function (about, error) {
                                                $ionicLoading.hide();
                                            }
                                        });
                                    }
                                },
                                error: function(error) {
                                    // The request failed
                                }
                            });
                        }
                    }
                ]
            });
        }
    })

    .controller('achievementsCtrl', function ($scope, $ionicPopup, $http, $ionicLoading) {
        $ionicLoading.show({
            template: 'Loading...'
        });

        $scope.data = {
            showDelete: false,
            showEdit: false
        };

        $scope.onItemSwipeLeft = function () {
            $scope.data = {
                showDelete: true,
            };
        }

        // GET
        $scope.getAchievements = function () {
            $ionicLoading.show({
                template: 'Loading...'
            });
            var Achievements = Parse.Object.extend("Achievements");
            var query = new Parse.Query(Achievements);
            query.limit(30);
            query.find({
                success: function(data) {
                    var Achievements = JSON.stringify(data),
                        achievements = JSON.parse(Achievements);
                    $scope.achievements = achievements;
                    setTimeout(function () {
                        $ionicLoading.hide();
                    }, 1000);
                },
                error: function(error) {
                    $ionicLoading.hide();
                }
            });
        };
        $scope.getAchievements();


        // UPDATE
        $scope.onItemUpdate = function (achievement) {

            var updatePopUP = $ionicPopup.show({
                scope: $scope,
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<input type="text" class="optionUpdate" value="' + achievement.option + '">' +
                '<input type="text" class="titleUpdate" placeholder="Title" value="' + achievement.title + '">' +
                '<textarea placeholder="Summary" class="summaryUpdate">' + achievement.summary + '</textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Updating...'
                            });
                            var option = $('.optionUpdate').val();
                            var title = $('.titleUpdate').val();
                            var summary = $('.summaryUpdate').val();


                            var query = new Parse.Query("Achievements");
                            query.get(achievement.objectId, {
                                success: function(object) {
                                    object.set("option", option);
                                    object.set("title", title);
                                    object.set("summary", summary);
                                    object.save();
                                    $scope.getAchievements();
                                    $scope.data = {
                                        showDelete: false,
                                        showEdit: false
                                    };
                                },
                                error: function(error) {
                                    $ionicLoading.hide();
                                }
                            });


                        }
                    }
                ]
            });
        }

        // DELETE
        $scope.onItemDelete = function (achievement) {
            $ionicLoading.show({
                template: 'Deleting...'
            });
            var Achievements = Parse.Object.extend("Achievements");
            var query = new Parse.Query(Achievements);
            query.get(achievement.objectId, {
                success: function(yourObj) {
                    yourObj.destroy({ });
                    $scope.achievements.splice($scope.achievements.indexOf(achievement), 1);
                    $ionicLoading.hide();
                    $scope.data = {
                        showDelete: false,
                        showEdit: false
                    };
                },
                error: function(object, error) {
                }
            });

        };

        // FORM POSTS
        $scope.itemAdd = function (item) {
            var myPopup = $ionicPopup.show({
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<label class="item item-select title popupselect" name="title">' +
                '<span class="input-label">Type</span>' +
                '<select class="type">' +
                '<option value="General">General</option>' +
                '<option value="Dissertation">Dissertation</option>' +
                '<option value="Exhibit">Exhibit</option>' +
                '<option value="Publication">Publication</option>' +
                '<option value="Research">Research</option>' +
                '<option value="Projects">Projects</option>' +
                '</select>' +
                '</label>' +
                '<input type="text" class="titleNew" placeholder="Title"/>' +
                '<textarea placeholder="Summary" class="summary"></textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant Achievement, <br> Achievements are not the same as Awards',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Saving...'
                            });
                            var option = $('.type').val();
                            var titleNew = $('.titleNew').val();
                            var summary = $('.summary').val();
                            var owner = Parse.User.current();

                            var EducationTraining = Parse.Object.extend("Achievements");
                            var interest = new EducationTraining();

                            interest.set({
                                "option": option,
                                "title": titleNew,
                                "summary": summary,
                                "owner": owner
                            });
                            interest.setACL(new Parse.ACL(owner));
                            interest.save(null, {
                                success: function (achievement) {
                                    $scope.getAchievements();
                                },
                                error: function (achievement, error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };
    })

    .controller('awardsCtrl', function ($scope, $ionicPopup, $http, $ionicLoading) {
        $ionicLoading.show({
            template: 'Loading...'
        });

        $scope.data = {
            showDelete: false,
            showEdit: false
        };

        $scope.onItemSwipeLeft = function () {
            $scope.data = {
                showDelete: true,
            };
        };

        // GET
        $scope.getAwards = function () {
            $ionicLoading.show({
                template: 'Loading...'
            });
            var Awards = Parse.Object.extend("Awards");
            var query = new Parse.Query(Awards);
            query.limit(30);
            query.find({
                success: function(data) {
                    var Awards = JSON.stringify(data),
                        awards = JSON.parse(Awards);
                    $scope.awards = awards;
                    setTimeout(function () {
                        $ionicLoading.hide();
                    }, 1000);
                },
                error: function(error) {
                    $ionicLoading.hide();
                }
            });
        };
        $scope.getAwards();


        // UPDATE
        $scope.onItemUpdate = function (award) {

            var updatePopUP = $ionicPopup.show({
                scope: $scope,
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<input type="text" class="optionUpdate" value="' + award.option + '">' +
                '<input type="text" class="dateUpdate" placeholder="When" value="' + award.awarddate + '">' +
                '<input type="text" class="titleUpdate" placeholder="Title" value="' + award.title + '">' +
                '<textarea placeholder="Summary" class="summaryUpdate">' + award.summary + '</textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Updating...'
                            });
                            var option = $('.optionUpdate').val();
                            var date = $('.dateUpdate').val();
                            var title = $('.titleUpdate').val();
                            var summary = $('.summaryUpdate').val();

                            var query = new Parse.Query("Awards");
                            query.get(award.objectId, {
                                success: function(object) {
                                    object.set("option", option);
                                    object.set("awarddate", date);
                                    object.set("title", title);
                                    object.set("summary", summary);
                                    object.save();
                                    $scope.getAwards();
                                    $scope.data = {
                                        showDelete: false,
                                        showEdit: false
                                    };
                                },
                                error: function(error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };

        // DELETE
        $scope.onItemDelete = function (interest) {
            $ionicLoading.show({
                template: 'Deleting...'
            });
            var Awards = Parse.Object.extend("Awards");
            var query = new Parse.Query(Awards);
            query.get(interest.objectId, {
                success: function(yourObj) {
                    yourObj.destroy({ });
                    $scope.awards.splice($scope.awards.indexOf(interest), 1);
                    $ionicLoading.hide();
                    $scope.data = {
                        showDelete: false,
                        showEdit: false
                    };
                },
                error: function(object, error) {
                }
            });

        };

        // FORM POSTS
        $scope.itemAdd = function (item) {
            var myPopup = $ionicPopup.show({
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<label class="item item-select title popupselect" name="title">' +
                '<span class="input-label">Type</span>' +
                '<select class="type">' +
                '<option value="Award">Award</option>' +
                '<option value="Honors">Honors</option>' +
                '<option value="Fellowship">Fellowship</option>' +
                '<option value="AcademicHonors">Academic Honors</option>' +
                '<option value="Scholarship">Scholarship</option>' +
                '<option value="Endorsement">Endorsement</option>' +
                '<option value="Achievement">Achievement</option>' +
                '<option value="Recognition">Recognition</option>' +
                '</select>' +
                '</label>' +
                '<input type="text" class="awardDate" placeholder="Date"/>' +
                '<input type="text" class="titleNew" placeholder="Title"/>' +
                '<textarea placeholder="Summary" class="summary"></textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Saving...'
                            });
                            var option = $('.type').val();
                            var awarddate = $('.awardDate').val();
                            var titleNew = $('.titleNew').val();
                            var summary = $('.summary').val();
                            var owner = Parse.User.current();

                            var EducationTraining = Parse.Object.extend("Awards");
                            var interest = new EducationTraining();

                            interest.set({
                                "option": option,
                                "awarddate": awarddate,
                                "title": titleNew,
                                "summary": summary,
                                "owner": owner
                            });
                            interest.setACL(new Parse.ACL(owner));
                            interest.save(null, {
                                success: function (interest) {
                                    $scope.getAwards();
                                },
                                error: function (interest, error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };
    })

    .controller('credibilityCtrl', function ($scope, $ionicSideMenuDelegate, $ionicPopup, $http, $ionicLoading) {
        $ionicLoading.show({
            template: 'Loading...'
        });

        $scope.data = {
            showDelete: false,
            showEdit: false
        };

        $scope.onItemSwipeLeft = function () {
            $scope.data = {
                showDelete: true
            };
        };

        $scope.onItemSwipeRight = function () {
            $scope.data = {
                showEdit: true
            };
        };

        $scope.stopDrag = function(){
            $ionicSideMenuDelegate.canDragContent(false);
        };

        // GET
        $scope.getCredibilities = function () {
            $ionicLoading.show({
                template: 'Loading...'
            });
            var Credibility = Parse.Object.extend("Credibility");
            var query = new Parse.Query(Credibility);
            query.limit(30);
            query.find({
                success: function(data) {
                    var Credibility = JSON.stringify(data),
                        credibilities = JSON.parse(Credibility);
                    $scope.credibilities = credibilities;
                    setTimeout(function () {
                        $ionicLoading.hide();
                    }, 1000);
                },
                error: function(error) {
                    $ionicLoading.hide();
                }
            });
        };
        $scope.getCredibilities();


        // UPDATE
        $scope.onItemUpdate = function (credibility) {

            var updatePopUP = $ionicPopup.show({
                scope: $scope,
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<input type="text" class="optionUpdate" value="' + credibility.option + '">' +
                '<input type="text" class="titleUpdate" placeholder="Title" value="' + credibility.title + '">' +
                '<textarea placeholder="Summary" class="summary">' + credibility.summary + '</textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Updating...'
                            });
                            var option = $('.optionUpdate').val();
                            var title = $('.titleUpdate').val();
                            var summary = $('.summary').val();

                            var query = new Parse.Query("Credibility");
                            query.get(credibility.objectId, {
                                success: function(object) {
                                    object.set("option", option);
                                    object.set("title", title);
                                    object.set("summary", summary);
                                    object.save();
                                    $scope.getCredibilities();
                                    $scope.data = {
                                        showDelete: false,
                                        showEdit: false
                                    };
                                },
                                error: function(error) {
                                    $ionicLoading.hide();
                                }
                            });


                        }
                    }
                ]
            });
        };

        // DELETE
        $scope.onItemDelete = function (credibility) {
            $ionicLoading.show({
                template: 'Deleting...'
            });
            var Credibility = Parse.Object.extend("Credibility");
            var query = new Parse.Query(Credibility);
            query.get(credibility.objectId, {
                success: function(yourObj) {
                    yourObj.destroy({ });
                    $scope.credibilities.splice($scope.credibilities.indexOf(credibility), 1);
                    $ionicLoading.hide();
                    $scope.data = {
                        showDelete: false,
                        showEdit: false
                    };
                },
                error: function(object, error) {
                    $ionicLoading.hide();
                }
            });

        };

        // FORM POSTS
        $scope.itemAdd = function (item) {
            var myPopup = $ionicPopup.show({
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<label class="item item-select title popupselect" name="title">' +
                '<span class="input-label">Type</span>' +
                '<select class="type">' +
                '<option value="References">References</option>' +
                '<option value="Testimonials">Testimonials</option>' +
                '<option value="Recommendations">Recommendations</option>' +
                '<option value="Certifications">Certifications</option>' +
                '<option value="Other">Other</option>' +
                '</select>' +
                '</label>' +
                '<input type="text" class="titleNew" placeholder="Title"/>' +
                '<textarea placeholder="Summary" class="summary"></textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            var option = $('.type').val();
                            var titleNew = $('.titleNew').val();
                            var summary = $('.summary').val();
                            var owner = Parse.User.current();

                            var EducationTraining = Parse.Object.extend("Credibility");
                            var interest = new EducationTraining();

                            interest.set({
                                "option": option,
                                "title": titleNew,
                                "summary": summary,
                                "owner": owner
                            });
                            interest.setACL(new Parse.ACL(owner));
                            interest.save(null, {
                                success: function (credibility) {
                                    $scope.getCredibilities();
                                },
                                error: function (credibility, error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };
    })

    .controller('educationTrainingCtrl', function ($scope, $ionicPopup, $http, $ionicLoading) {

        $ionicLoading.show({
            template: 'Loading...'
        });

        $scope.data = {
            showDelete: false,
            showEdit: false
        };

        $scope.onItemSwipeLeft = function () {
            $scope.data = {
                showDelete: true
            };
        };

        // GET
        $scope.getEducation = function () {
            $ionicLoading.show({
                template: 'Loading...'
            })
            var EducationTraining = Parse.Object.extend("EducationTraining");
            var query = new Parse.Query(EducationTraining);
            query.limit(30);
            query.find({
                success: function(data) {
                    var EducationTraining = JSON.stringify(data),
                        educations = JSON.parse(EducationTraining);
                    $scope.educations = educations;
                    setTimeout(function () {
                        $ionicLoading.hide();
                    }, 1000);
                },
                error: function(error) {
                    $ionicLoading.hide();
                }
            });
        };
        $scope.getEducation();


        // UPDATE
        $scope.onItemUpdate = function (education) {
            var updatePopUP = $ionicPopup.show({
                scope: $scope,
                cssClass: 'wideInputPopup',
                template: '<form>' +
                '<input type="text" class="fromNEW" value="' + education.from + '"  />' +
                '<input type="text" class="tillNEW" value="' + education.till + '"  />' +
                '<input type="text" class="institutionNameNEW" value="' + education.institutionName + '"  />' +
                '<input type="text" class="programmeNEW" value="' + education.programme + '"  />' +
                '<textarea placeholder="Summary" class="summaryNEW">' + education.summary + '</textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Updating...'
                            });
                            var from = $('.fromNEW').val();
                            var till = $('.tillNEW').val();
                            var institutionNameNEW = $('.institutionNameNEW').val();
                            var programmeNEW = $('.programmeNEW').val();
                            var summaryNEW = $('.summaryNEW').val();


                            var query = new Parse.Query("EducationTraining");
                            query.get(education.objectId, {
                                success: function(object) {
                                    object.set("from", from);
                                    object.set("till", till);
                                    object.set("institutionName", institutionNameNEW);
                                    object.set("programme", programmeNEW);
                                    object.set("summary", summaryNEW);
                                    object.save();
                                    $scope.getEducation();
                                    $scope.data = {
                                        showDelete: false,
                                        showEdit: false
                                    };
                                },
                                error: function(error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };

        // DELETE
        $scope.onItemDelete = function (education) {
            $ionicLoading.show({
                template: 'Deleting...'
            });
            var EducationTraining = Parse.Object.extend("EducationTraining");
            var query = new Parse.Query(EducationTraining);
            query.get(education.objectId, {
                success: function(yourObj) {
                    yourObj.destroy({ });
                    $scope.educations.splice($scope.educations.indexOf(education), 1);
                    $ionicLoading.hide();
                    $scope.data = {
                        showDelete: false,
                        showEdit: false
                    };
                },
                error: function(object, error) {
                    $ionicLoading.hide();
                }
            });

        };

        // FORM POSTS
        $scope.itemAdd = function (item) {
            var myPopup = $ionicPopup.show({
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<input type="text" class="from" placeholder="Date From"  />' +
                '<input type="text" class="till" placeholder="Date Till (optional)"/>' +
                '<input type="text" class="institutionName" placeholder="Institution"  />' +
                '<input type="text" class="programme" placeholder="Programme"/>' +
                '<textarea placeholder="Summary" class="summary"></textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Saving...'
                            });
                            var from = $('.from').val();
                            var till = $('.till').val();
                            var institutionName = $('.institutionName').val();
                            var programme = $('.programme').val();
                            var summary = $('.summary').val();
                            var owner = Parse.User.current();

                            var EducationTraining = Parse.Object.extend("EducationTraining");
                            var edupost = new EducationTraining();

                            edupost.set({
                                "from": from,
                                "till": till,
                                "institutionName": institutionName,
                                "programme": programme,
                                "summary": summary,
                                "owner": owner
                            });
                            edupost.setACL(new Parse.ACL(owner));
                            edupost.save(null, {
                                success: function (edupost) {
                                    $scope.getEducation();
                                },
                                error: function (edupost, error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };


    })

    .controller('interestsCtrl', function ($scope, $ionicPopup, $http, $ionicLoading) {
        $ionicLoading.show({
            template: 'Loading...'
        });

        $scope.data = {
            showDelete: false,
            showEdit: false,
        };

        $scope.onItemSwipeLeft = function () {
            $scope.data = {
                showDelete: true
            };
        };

        // GET
        $scope.getInterests = function () {
            $ionicLoading.show({
                template: 'Loading...'
            })
            var Interests = Parse.Object.extend("Interests");
            var query = new Parse.Query(Interests);
            query.limit(30);
            query.find({
                success: function(data) {
                    var Interests = JSON.stringify(data),
                        interests = JSON.parse(Interests);
                    $scope.interests = interests;
                    setTimeout(function () {
                        $ionicLoading.hide();
                    }, 1000);
                },
                error: function(error) {
                    $ionicLoading.hide();
                }
            });
        };
        $scope.getInterests();


        // UPDATE
        $scope.onItemUpdate = function (interest) {
            var updatePopUP = $ionicPopup.show({
                scope: $scope,
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<input type="text" class="optionUpdate" value="' + interest.option + '">' +
                '<input type="text" class="titleUpdate" placeholder="Title" value="' + interest.title + '">' +
                '<textarea placeholder="Summary" class="summaryUpdate">' + interest.summary + '</textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Updating...'
                            });
                            var option = $('.optionUpdate').val();
                            var title = $('.titleUpdate').val();
                            var summary = $('.summaryUpdate').val();

                            var query = new Parse.Query("Interests");
                            query.get(interest.objectId, {
                                success: function(object) {
                                    object.set("option", option);
                                    object.set("title", title);
                                    object.set("summary", summary);
                                    object.save();
                                    $scope.getInterests();
                                    $scope.data = {
                                        showDelete: false,
                                        showEdit: false
                                    };
                                },
                                error: function(error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };

        // DELETE
        $scope.onItemDelete = function (interest) {
            $ionicLoading.show({
                template: 'Deleting...'
            });
            var Interests = Parse.Object.extend("Interests");
            var query = new Parse.Query(Interests);
            query.get(interest.objectId, {
                success: function(yourObj) {
                    yourObj.destroy({ });
                    $scope.interests.splice($scope.interests.indexOf(interest), 1);
                    $ionicLoading.hide();
                    $scope.data = {
                        showDelete: false,
                        showEdit: false
                    };
                },
                error: function(object, error) {
                    $ionicLoading.hide();
                }
            });


        };

        // FORM POSTS
        $scope.itemAdd = function (item) {
            var myPopup = $ionicPopup.show({
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<label class="item item-select title popupselect" name="title">' +
                '<span class="input-label">Type</span>' +
                '<select class="typeNew">' +
                '<option value="Hobby">Hobby</option>' +
                '<option value="Personal Interest">Personal Interests</option>' +
                '<option value="General">Other</option>' +
                '</select>' +
                '</label>' +
                '<input type="text" class="titleNew" placeholder="Title"/>' +
                '<textarea placeholder="Summary" class="summaryNew"></textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Saving...'
                            });

                            var option = $('.typeNew').val();
                            var titleNew = $('.titleNew').val();
                            var summary = $('.summaryNew').val();
                            var owner = Parse.User.current();

                            var EducationTraining = Parse.Object.extend("Interests");
                            var interest = new EducationTraining();

                            interest.set({
                                "option": option,
                                "title": titleNew,
                                "summary": summary,
                                "owner": owner
                            });
                            interest.setACL(new Parse.ACL(owner));
                            interest.save(null, {
                                success: function (interest) {
                                    $scope.getInterests();
                                },
                                error: function (interest, error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };
    })

    .controller('militaryExperienceCtrl', function ($scope, $ionicPopup, $http, $ionicLoading) {
        $ionicLoading.show({
            template: 'Loading...'
        });

        $scope.data = {
            showDelete: false,
            showEdit: false,
        };

        $scope.onItemSwipeLeft = function () {
            $scope.data = {
                showDelete: true
            };
        };

        // GET
        $scope.getArmy = function () {
            $ionicLoading.show({
                template: 'Loading...'
            })
            var MilitaryExperience = Parse.Object.extend("MilitaryExperience");
            var query = new Parse.Query(MilitaryExperience);
            query.limit(30);
            query.find({
                success: function(data) {
                    var MilitaryExperience = JSON.stringify(data),
                        army = JSON.parse(MilitaryExperience);
                    $scope.army = army;
                    setTimeout(function () {
                        $ionicLoading.hide();
                    }, 1000);
                },
                error: function(error) {
                    $ionicLoading.hide();
                }
            });
        };
        $scope.getArmy();

        // UPDATE
        $scope.onItemUpdate = function (soldier) {
            var updatePopUP = $ionicPopup.show({
                scope: $scope,
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<input type="text" class="fromUpdate" value="' + soldier.from + '">' +
                '<input type="text" class="tillUpdate" value="' + soldier.till + '">' +
                '<input type="text" class="rankUpdate" value="' + soldier.rank + '">' +
                '<textarea placeholder="Summary" class="summary">' + soldier.summary + '</textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Updating...'
                            });
                            var from = $('.fromUpdate').val();
                            var till = $('.tillUpdate').val();
                            var rank = $('.rankUpdate').val();
                            var summary = $('.summary').val();

                            var query = new Parse.Query("MilitaryExperience");
                            query.get(soldier.objectId, {
                                success: function(object) {
                                    object.set("from", from);
                                    object.set("till", till);
                                    object.set("rank", rank);
                                    object.set("summary", summary);
                                    object.save();
                                    $scope.getArmy();
                                    $scope.data = {
                                        showDelete: false,
                                        showEdit: false
                                    };
                                },
                                error: function(error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };

        // DELETE
        $scope.onItemDelete = function (soldier) {
            $ionicLoading.show({
                template: 'Deleting...'
            });
            var MilitaryExperience = Parse.Object.extend("MilitaryExperience");
            var query = new Parse.Query(MilitaryExperience);
            query.get(soldier.objectId, {
                success: function(yourObj) {
                    yourObj.destroy({ });
                    $scope.army.splice($scope.army.indexOf(soldier), 1);
                    $ionicLoading.hide();
                    $scope.data = {
                        showDelete: false,
                        showEdit: false
                    };
                },
                error: function(object, error) {
                    $ionicLoading.hide();
                }
            });
        };

        // FORM POSTS
        $scope.itemAdd = function (item) {
            var myPopup = $ionicPopup.show({
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<input type="text" class="from" placeholder="From"/>' +
                '<input type="text" class="till" placeholder="Till"/>' +
                '<input type="text" class="rank" placeholder="Rank / Position"/>' +
                '<textarea placeholder="Summary" class="summary"></textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Saving...'
                            });
                            var from = $('.from').val();
                            var till = $('.till').val();
                            var rank = $('.rank').val();
                            var summary = $('.summary').val();
                            var owner = Parse.User.current();

                            var EducationTraining = Parse.Object.extend("MilitaryExperience");
                            var interest = new EducationTraining();

                            interest.set({
                                "from": from,
                                "till": till,
                                "rank": rank,
                                "summary": summary,
                                "owner": owner
                            });
                            interest.setACL(new Parse.ACL(owner));
                            interest.save(null, {
                                success: function (soldier) {
                                    $scope.getArmy();
                                },
                                error: function (soldier, error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };
    })

    .controller('objectivesGoalsCtrl', function ($scope, $window, $ionicPopup, $http, $ionicLoading) {
        $ionicLoading.show({
            template: 'Loading...'
        });

        $scope.data = {
            showDelete: false,
            showEdit: false
        };

        $scope.onItemSwipeLeft = function () {
            $scope.data = {
                showDelete: true
            };
        };

        // GET
        $scope.getObjective = function () {
            $ionicLoading.show({
                template: 'Loading...'
            });
            var ObjectivesGoals = Parse.Object.extend("ObjectivesGoals");
            var query = new Parse.Query(ObjectivesGoals);
            query.limit(30);
            query.find({
                success: function(data) {
                    var ObjectivesGoals = JSON.stringify(data),
                        objectives = JSON.parse(ObjectivesGoals);
                    $scope.objectives = objectives;
                    setTimeout(function () {
                        $ionicLoading.hide();
                    }, 1000);
                },
                error: function(error) {
                    $ionicLoading.hide();
                }
            });
        }; $scope.getObjective();



        // UPDATE
        $scope.onItemUpdate = function (objective) {
            var updatePopUP = $ionicPopup.show({
                scope: $scope,
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<input type="text" class="optionUpdate" value="' + objective.option + '">' +
                '<textarea placeholder="Summary" class="summary">' + objective.summary + '</textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {

                            $ionicLoading.show({
                                template: 'Updating...'
                            });

                            var option = $('.optionUpdate').val();
                            var summary = $('.summary').val();

                            var query = new Parse.Query("ObjectivesGoals");
                            query.get(objective.objectId, {
                                success: function(object) {
                                    object.set("option", option);
                                    object.set("summary", summary);
                                    object.save();
                                    $scope.getObjective();
                                    $scope.data = {
                                        showDelete: false,
                                        showEdit: false
                                    };
                                },
                                error: function(error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };

        // DELETE
        $scope.onItemDelete = function (objective) {
            $ionicLoading.show({
                template: 'Deleting...'
            });
            var ObjectivesGoals = Parse.Object.extend("ObjectivesGoals");
            var query = new Parse.Query(ObjectivesGoals);
            query.get(objective.objectId, {
                success: function(yourObj) {
                    yourObj.destroy({ });
                    $scope.objectives.splice($scope.objectives.indexOf(objective), 1);
                    $ionicLoading.hide();
                    $scope.data = {
                        showDelete: false,
                        showEdit: false
                    };
                },
                error: function(object, error) {
                    $ionicLoading.hide();
                }
            });

        };

        // FORM POSTS
        $scope.itemAdd = function (item) {
            var myPopup = $ionicPopup.show({
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<label class="item item-select title popupselect" name="title">' +
                '<span class="input-label">Type</span>' +
                '<select class="type">' +
                '<option>Career Goal</option>' +
                '<option>Career Objective</option>' +
                '<option>Employment Objective</option>' +
                '<option>Professional Objective</option>' +
                '<option>Other</option>' +
                '</select>' +
                '</label>' +
                '<textarea placeholder="Summary" class="summary"></textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Saving...'
                            });
                            var option = $('.type').val();
                            var titleNew = $('.titleNew').val();
                            var summary = $('.summary').val();
                            var owner = Parse.User.current();

                            var EducationTraining = Parse.Object.extend("ObjectivesGoals");
                            var interest = new EducationTraining();

                            interest.set({
                                "option": option,
                                "title": titleNew,
                                "summary": summary,
                                "owner": owner
                            });
                            interest.setACL(new Parse.ACL(owner));
                            interest.save(null, {
                                success: function (objective) {
                                    $scope.getObjective();
                                },
                                error: function (objective, error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };
    })

    .controller('skillsCtrl', function ($scope, $ionicPopup, $http, $ionicLoading) {
        $ionicLoading.show({
            template: 'Loading...'
        });

        $scope.data = {
            showDelete: false,
            showEdit: false
        };

        $scope.onItemSwipeLeft = function () {
            $scope.data = {
                showDelete: true
            };
        };

        // GET
        $scope.getSkills = function () {
            $ionicLoading.show({
                template: 'Loading...'
            });
            var Skills = Parse.Object.extend("Skills");
            var query = new Parse.Query(Skills);
            query.limit(30);
            query.find({
                success: function(data) {
                    var Skills = JSON.stringify(data),
                        skills = JSON.parse(Skills);
                    $scope.skills = skills;
                    setTimeout(function () {
                        $ionicLoading.hide();
                    }, 1000);
                },
                error: function(error) {
                    $ionicLoading.hide();
                }
            });
        };
        $scope.getSkills();


        // UPDATE
        $scope.onItemUpdate = function (skill) {
            var updatePopUP = $ionicPopup.show({
                scope: $scope,
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<input type="text" class="optionUpdate" value="' + skill.option + '">' +
                '<input type="text" class="titleUpdate" placeholder="Title" value="' + skill.title + '">' +

                '<div class="item range range-positive">' +
                '<i class="icon ion-ios-lightbulb-outline"></i>' +
                '<input type="range" name="volume" class="levelU" min="0" max="100" value="' + skill.level + '">' +
                '<i class="icon ion-ios-lightbulb"></i>' +
                '</div>' +

                '<textarea placeholder="Summary" class="summaryU">' + skill.summary + '</textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {

                            $ionicLoading.show({
                                template: 'Updating...'
                            });

                            var option = $('.optionUpdate').val();
                            var title = $('.titleUpdate').val();
                            var level = $('.levelU').val();
                            var summary = $('.summaryU').val();

                            var query = new Parse.Query("Skills");
                            query.get(skill.objectId, {
                                success: function(object) {
                                    object.set("option", option);
                                    object.set("title", title);
                                    object.set("level", level);
                                    object.set("summary", summary);
                                    object.save();
                                    $scope.getSkills();
                                    $scope.data = {
                                        showDelete: false,
                                        showEdit: false
                                    };
                                },
                                error: function(error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };

        // DELETE
        $scope.onItemDelete = function (skill) {
            $ionicLoading.show({
                template: 'Deleting...'
            });
            var Skills = Parse.Object.extend("Skills");
            var query = new Parse.Query(Skills);
            query.get(skill.objectId, {
                success: function(yourObj) {
                    yourObj.destroy({ });
                    $scope.skills.splice($scope.skills.indexOf(skill), 1);
                    $ionicLoading.hide();
                    $scope.data = {
                        showDelete: false,
                        showEdit: false
                    };
                },
                error: function(object, error) {
                    $ionicLoading.hide();
                }
            });

        };

        // FORM POSTS
        $scope.itemAdd = function (item) {
            var myPopup = $ionicPopup.show({
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<label class="item item-select title popupselect" name="title">' +
                '<span class="input-label">Type</span>' +
                '<select class="type">' +
                '<option value="Specialized Skill">Specialized Skills</option>' +
                '<option value="Technical Skill">Technical Skills</option>' +
                '<option value="Software Skill">Other Skills</option>' +
                '</select>' +
                '</label>' +
                '<input type="text" class="titleNew" placeholder="Title"/>' +

                '<div class="item range range-positive">' +
                '<i class="icon ion-ios-lightbulb-outline"></i>' +
                '<input type="range" name="volume" class="level" min="0" max="100" value="75">' +
                '<i class="icon ion-ios-lightbulb"></i>' +
                '</div>' +

                '<textarea placeholder="Summary" class="summary"></textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Saving...'
                            });
                            var option = $('.type').val();
                            var titleNew = $('.titleNew').val();
                            var level = $('.level').val();
                            var summary = $('.summary').val();
                            var owner = Parse.User.current();

                            var EducationTraining = Parse.Object.extend("Skills");
                            var interest = new EducationTraining();

                            interest.set({
                                "option": option,
                                "title": titleNew,
                                "level": level,
                                "summary": summary,
                                "owner": owner
                            });
                            interest.setACL(new Parse.ACL(owner));
                            interest.save(null, {
                                success: function (skill) {
                                    $scope.getSkills();
                                },
                                error: function (skill, error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };
    })

    .controller('socialMediaProfilesCtrl', function ($scope, $ionicPopup, $http, $ionicLoading) {
        $ionicLoading.show({
            template: 'Loading...'
        })

        $scope.data = {
            showDelete: false,
            showEdit: false
        };

        $scope.onItemSwipeLeft = function () {
            $scope.data = {
                showDelete: true
            };
        };

        // GET
        $scope.getsocialMediaProfilesCtrl = function () {
            $ionicLoading.show({
                template: 'Loading...'
            });
            var SocialMediaProfiles = Parse.Object.extend("SocialMediaProfiles");
            var query = new Parse.Query(SocialMediaProfiles);
            query.limit(30);
            query.find({
                success: function(data) {
                    var SocialMediaProfiles = JSON.stringify(data),
                        socialmediaProfiles = JSON.parse(SocialMediaProfiles);
                    $scope.socialmediaProfiles = socialmediaProfiles;
                    setTimeout(function () {
                        $ionicLoading.hide();
                    }, 1000);
                },
                error: function(error) {
                    $ionicLoading.hide();
                }
            });
        };
        $scope.getsocialMediaProfilesCtrl();


        // UPDATE
        $scope.onItemUpdate = function (socialmediaProfile) {
            var updatePopUP = $ionicPopup.show({
                scope: $scope,
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<input type="text" disabled="disabled" class="optionUpdate" value="' + socialmediaProfile.option + '">' +
                '<input type="text" class="titleUpdate" placeholder="Title" value="' + socialmediaProfile.title + '">',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Updating...'
                            });
                            var option = $('.optionUpdate').val();
                            var title = $('.titleUpdate').val();
                            var summary = $('.summaryUpdate').val();

                            var query = new Parse.Query("SocialMediaProfiles");
                            query.get(socialmediaProfile.objectId, {
                                success: function(object) {
                                    object.set("option", option);
                                    object.set("title", title);
                                    object.save();
                                    $scope.getsocialMediaProfilesCtrl();
                                    $scope.data = {
                                        showDelete: false,
                                        showEdit: false
                                    };
                                },
                                error: function(error) {
                                    $ionicLoading.hide();
                                }
                            });


                        }
                    }
                ]
            });
        };

        // DELETE
        $scope.onItemDelete = function (socialmediaProfile) {
            $ionicLoading.show({
                template: 'Deleting...'
            });
            var SocialMediaProfiles = Parse.Object.extend("SocialMediaProfiles");
            var query = new Parse.Query(SocialMediaProfiles);
            query.get(socialmediaProfile.objectId, {
                success: function(yourObj) {
                    yourObj.destroy({ });
                    $scope.socialmediaProfiles.splice($scope.socialmediaProfiles.indexOf(socialmediaProfile), 1);
                    $ionicLoading.hide();
                    $scope.data = {
                        showDelete: false,
                        showEdit: false
                    };
                },
                error: function(object, error) {
                    $ionicLoading.hide();
                }
            });

        };

        // FORM POSTS
        $scope.itemAdd = function (item) {
            var myPopup = $ionicPopup.show({
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<label class="item item-select title popupselect" name="title">' +
                '<span class="input-label">Type</span>' +
                '<select class="type">' +
                '<option value="twitter">Twitter</option>' +
                '<option value="facebook">Facebook</option>' +
                '<option value="github">GitHub</option>' +
                '<option value="linkdin">LinkdIn</option>' +
                '<option value="Other">Other</option>' +
                '</select>' +
                '</label>' +
                '<input type="text" class="titleNew" placeholder="Link"/>' +
                '</form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Saving...'
                            });
                            var option = $('.type').val();
                            var titleNew = $('.titleNew').val();
                            var summary = $('.summary').val();
                            var owner = Parse.User.current();

                            var EducationTraining = Parse.Object.extend("SocialMediaProfiles");
                            var interest = new EducationTraining();

                            interest.set({
                                "option": option,
                                "title": titleNew,
                                "summary": summary,
                                "owner": owner
                            });
                            interest.setACL(new Parse.ACL(owner));
                            interest.save(null, {
                                success: function (socialmediaProfile) {
                                    $scope.getsocialMediaProfilesCtrl();
                                },
                                error: function (socialmediaProfile, error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };
    })

    .controller('socialResponsibilityCtrl', function ($scope, $ionicPopup, $http, $ionicLoading) {
        $ionicLoading.show({
            template: 'Loading...'
        });

        $scope.data = {
            showDelete: false,
            showEdit: false
        };

        $scope.onItemSwipeLeft = function () {
            $scope.data = {
                showDelete: true
            };
        };

        // GET
        $scope.getSocialResponsibility = function () {
            $ionicLoading.show({
                template: 'Loading...'
            });
            var SocialResponsibility = Parse.Object.extend("SocialResponsibility");
            var query = new Parse.Query(SocialResponsibility);
            query.limit(30);
            query.find({
                success: function(data) {
                    var SocialResponsibility = JSON.stringify(data),
                        socialresponsibilities = JSON.parse(SocialResponsibility);
                    $scope.socialresponsibilities = socialresponsibilities;
                    setTimeout(function () {
                        $ionicLoading.hide();
                    }, 1000);
                },
                error: function(error) {
                    $ionicLoading.hide();
                }
            });
        };
        $scope.getSocialResponsibility();


        // UPDATE
        $scope.onItemUpdate = function (socialresponsibility) {
            var updatePopUP = $ionicPopup.show({
                scope: $scope,
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<input type="text" class="dateUp" value="' + socialresponsibility.date + '">' +
                '<input type="text" class="titleUp" placeholder="Title" value="' + socialresponsibility.title + '">' +
                '<textarea placeholder="Summary" class="summaryUp">' + socialresponsibility.summary + '</textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Updating...'
                            });
                            var date = $('.dateUp').val();
                            var title = $('.titleUp').val();
                            var summary = $('.summaryUp').val();

                            var query = new Parse.Query("SocialResponsibility");
                            query.get(socialresponsibility.objectId, {
                                success: function(object) {
                                    object.set("date", date);
                                    object.set("title", title);
                                    object.set("summary", summary);
                                    object.save();
                                    $scope.getSocialResponsibility();
                                    $scope.data = {
                                        showDelete: false,
                                        showEdit: false
                                    };
                                },
                                error: function(error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };

        // DELETE
        $scope.onItemDelete = function (socialresponsibility) {
            $ionicLoading.show({
                template: 'Deleting...'
            });
            var yourClass = Parse.Object.extend("SocialResponsibility");
            var query = new Parse.Query(yourClass);
            query.get(socialresponsibility.objectId, {
                success: function(yourObj) {
                    yourObj.destroy({ });
                    $scope.socialresponsibilities.splice($scope.socialresponsibilities.indexOf(socialresponsibility), 1);
                    $ionicLoading.hide();
                    $scope.data = {
                        showDelete: false,
                        showEdit: false
                    };
                },
                error: function(object, error) {
                }
            });

        };

        // FORM POSTS
        $scope.itemAdd = function (item) {
            var myPopup = $ionicPopup.show({
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<input type="text" class="date" placeholder="When (Date)"/>' +
                '<input type="text" class="titleNew" placeholder="Title"/>' +
                '<textarea placeholder="Summary" class="summary"></textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Saving...'
                            });
                            var date = $('.date').val();
                            var title = $('.titleNew').val();
                            var summary = $('.summary').val();
                            var owner = Parse.User.current();

                            var EducationTraining = Parse.Object.extend("SocialResponsibility");
                            var interest = new EducationTraining();

                            interest.set({
                                "date": date,
                                "title": title,
                                "summary": summary,
                                "owner": owner
                            });
                            interest.setACL(new Parse.ACL(owner));
                            interest.save(null, {
                                success: function (socialresponsibility) {
                                    $scope.getSocialResponsibility();
                                },
                                error: function (socialresponsibility, error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };
    })

    .controller('summariesCtrl', function ($scope, $ionicPopup, $http, $ionicLoading) {
        $ionicLoading.show({
            template: 'Loading...'
        });

        $scope.data = {
            showDelete: false,
            showEdit: false
        };

        $scope.onItemSwipeLeft = function () {
            $scope.data = {
                showDelete: true
            };
        };

        // GET
        $scope.getSummaries = function () {
            $ionicLoading.show({
                template: 'Loading...'
            });
            var Summaries = Parse.Object.extend("Summaries");
            var query = new Parse.Query(Summaries);
            query.limit(30);
            query.find({
                success: function(data) {
                    var Summaries = JSON.stringify(data),
                        summaries = JSON.parse(Summaries);
                    $scope.summaries = summaries;
                    setTimeout(function () {
                        $ionicLoading.hide();
                    }, 1000);
                },
                error: function(error) {
                    $ionicLoading.hide();
                }
            });
        };
        $scope.getSummaries();


        // UPDATE
        $scope.onItemUpdate = function (summary) {

            var updatePopUP = $ionicPopup.show({
                scope: $scope,
                cssClass: 'wideInputPopup',
                template: '<form><div class="list">' +
                '<textarea placeholder="Career Summary" class="carrersummaryUpdate">' + summary.careerSummary + '</textarea><br />' +
                '<textarea placeholder="Professional Summary" class="professionalsummaryUpdate">' + summary.summaryOfQualification + '</textarea>' +
                '</form>',

                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Updating...'
                            });
                            var careerSummary = $('.carrersummaryUpdate').val();
                            var summaryOfQualification = $('.professionalsummaryUpdate').val();

                            var query = new Parse.Query("Summaries");
                            query.get(summary.objectId, {
                                success: function(object) {
                                    object.set("careerSummary", careerSummary);
                                    object.set("summaryOfQualification", summaryOfQualification);
                                    object.save();
                                    $scope.getSummaries();
                                    $scope.data = {
                                        showDelete: false,
                                        showEdit: false
                                    };
                                },
                                error: function(error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };

        // DELETE
        $scope.onItemDelete = function (summary) {
            $ionicLoading.show({
                template: 'Deleting...'
            });
            var Summaries = Parse.Object.extend("Summaries");
            var query = new Parse.Query(Summaries);
            query.get(summary.objectId, {
                success: function(yourObj) {
                    yourObj.destroy({ });
                    $scope.summaries.splice($scope.summaries.indexOf(summary), 1);
                    $ionicLoading.hide();
                    $scope.data = {
                        showDelete: false,
                        showEdit: false
                    };
                },
                error: function(object, error) {
                    $ionicLoading.hide();
                }
            });

        };

        // FORM POSTS
        $scope.itemAdd = function (item) {
            var myPopup = $ionicPopup.show({
                cssClass: 'wideInputPopup',
                template: '<form>'+
                '<textarea placeholder="Career Summary" class="careerSummary"></textarea><br />' +
                '<textarea placeholder="Professional Summary" class="summaryOfQualification"></textarea>' +
                '</form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Saving...'
                            });
                            var careerSummary = $('.careerSummary').val();
                            var summaryOfQualification = $('.summaryOfQualification').val();
                            var owner = Parse.User.current();

                            var Summaries = Parse.Object.extend("Summaries");
                            var query = new Parse.Query(Summaries);
                            query.equalTo("owner", Parse.User);
                            query.count({
                                success: function(count) {
                                    if (count > 0){
                                        $ionicPopup.alert({
                                            title: 'Error',
                                            template: 'Summariers already exist, try reloging in again if the problem persists'
                                        });
                                    }else{
                                        var Summaries = Parse.Object.extend("Summaries");
                                        var interest = new Summaries();
                                        interest.set("careerSummary", careerSummary);
                                        interest.set("summaryOfQualification", summaryOfQualification);
                                        interest.set("owner", owner);

                                        interest.setACL(new Parse.ACL(owner));
                                        interest.save(null, {
                                            success: function (summary) {
                                                $scope.getSummaries();
                                                console.log(summary);
                                            },
                                            error: function (summary, error) {
                                                $ionicLoading.hide();
                                                console.log(error);
                                            }
                                        });
                                    }
                                },
                                error: function(error) {
                                    // The request failed
                                }
                            });

                        }
                    }
                ]
            });
        };
    })

    .controller('workHistoryCtrl', function ($scope, $ionicSideMenuDelegate, $ionicPopup, $http, $ionicLoading) {

        $ionicLoading.show({
            template: 'Loading...'
        });

        $scope.data = {
            showDelete: false,
            showEdit: false
        };

        $scope.onItemSwipeLeft = function () {
            $scope.data = {
                showDelete: true
            };
        };
        $scope.onItemSwipeRight = function () {
            $scope.data = {
                showEdit: true
            };
        };
        $ionicSideMenuDelegate.canDragContent(false);

        // GET
        $scope.getworks = function () {
            $ionicLoading.show({
                template: 'Loading...'
            });
            var WorkHistory = Parse.Object.extend("WorkHistory");
            var query = new Parse.Query(WorkHistory);
            query.limit(30);
            query.find({
                success: function(data) {
                    var WorkHistory = JSON.stringify(data),
                        works = JSON.parse(WorkHistory);
                    $scope.works = works;
                    setTimeout(function () {
                        $ionicLoading.hide();
                    }, 1000);
                },
                error: function(error) {
                    $ionicLoading.hide();
                }
            });
        }; $scope.getworks();


        // UPDATE
        $scope.onItemUpdate = function (work) {
            var updatePopUP = $ionicPopup.show({
                scope: $scope,
                cssClass: 'wideInputPopup',
                template: '<form>' +
                '<input type="text" class="fromUp" value="' + work.from + '"  />' +
                '<input type="text" class="tillUp" value="' + work.till + '"  />' +
                '<input type="text" class="typeUp" value="' + work.type + '"  />' +
                '<input type="text" class="organizationUp" value="' + work.Organization + '"  />' +
                '<input type="text" class="industryUp" value="' + work.industry + '"  />' +
                '<input type="text" class="positionUp" value="' + work.position + '"  />' +
                '<textarea placeholder="Responsibilities" class="responsibilitiesUp">' + work.responsibilities + '</textarea></form>'+
                '<textarea placeholder="Projects" class="projectsUp">' + work.projects + '</textarea></form>'+
                '<textarea placeholder="Summary" class="summaryUp">' + work.summary + '</textarea></form>',
                title: 'Enter Details',
                subTitle: 'Please select relavant category',
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Updating...'
                            });
                            var from = $('.fromUp').val();
                            var till = $('.tillUp').val();
                            var type = $('.typeUp').val();
                            var organization = $('.organizationUp').val();
                            var industry = $('.industryUp').val();
                            var position = $('.positionUp').val();
                            var responsibilities = $('.responsibilitiesUp').val();
                            var projects = $('.projectsUp').val();
                            var summary = $('.summaryUp').val();

                            var query = new Parse.Query("WorkHistory");
                            query.get(work.objectId, {
                                success: function(object) {
                                    object.set("from", from);
                                    object.set("till", till);
                                    object.set("type", type);
                                    object.set("Organization", organization);
                                    object.set("industry", industry);
                                    object.set("position", position);
                                    object.set("responsibilities", responsibilities);
                                    object.set("projects", projects);
                                    object.set("summary", summary);
                                    object.save();
                                    $scope.getworks();
                                    $scope.data = {
                                        showDelete: false,
                                        showEdit: false
                                    };
                                },
                                error: function(error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };

        // DELETE
        $scope.onItemDelete = function (work) {
            $ionicLoading.show({
                template: 'Deleting...'
            });
            var WorkHistory = Parse.Object.extend("WorkHistory");
            var query = new Parse.Query(WorkHistory);
            query.get(work.objectId, {
                success: function(yourObj) {
                    yourObj.destroy({ });
                    $scope.works.splice($scope.works.indexOf(work), 1);
                    $ionicLoading.hide();
                    $scope.data = {
                        showDelete: false,
                        showEdit: false
                    };
                },
                error: function(object, error) {
                    $ionicLoading.hide();
                }
            });


        };

        // FORM POSTS
        $scope.itemAdd = function (item) {
            var myPopup = $ionicPopup.show({
                cssClass: 'wideInputPopup',
                template: '<input type="text" class="from" placeholder="From (Date)" />' +
                '<input type="text" class="till" placeholder="Till (Date)" />' +
                '<input type="text" class="type" placeholder="Type: [permanent, voluntary, temporary]"  />' +
                '<input type="text" class="organization" placeholder="Organization"/>' +
                '<input type="text" class="industry" placeholder="Industry"/>' +
                '<input type="text" class="position" placeholder="Position"/>' +
                '<textarea placeholder="Responsibilities" class="responsibilities"></textarea></form>'+
                '<textarea placeholder="Projects" class="projects"></textarea></form>'+
                '<textarea placeholder="Summary" class="summary"></textarea></form>',
                title: 'Enter Details',
                subTitle: 'You can insert as many as possible',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            $ionicLoading.show({
                                template: 'Saving...'
                            });
                            var from = $('.from').val();
                            var till = $('.till').val();
                            var type = $('.type').val();
                            var organization = $('.organization').val();
                            var industry = $('.industry').val();
                            var position = $('.position').val();
                            var responsibilities = $('.responsibilities').val();
                            var projects = $('.projects').val();
                            var summary = $('.summary').val();
                            var owner = Parse.User.current();

                            var EducationTraining = Parse.Object.extend("WorkHistory");
                            var edupost = new EducationTraining();

                            edupost.set({
                                "from": from,
                                "till": till,
                                "type": type,
                                "Organization": organization,
                                "industry": industry,
                                "position": position,
                                "responsibilities": responsibilities,
                                "projects": projects,
                                "summary": summary,
                                "owner": owner,
                            });
                            edupost.setACL(new Parse.ACL(owner));
                            edupost.save(null, {
                                success: function (edupost) {
                                    $scope.getworks();
                                },
                                error: function (edupost, error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        };


    })

    .controller('loginCtrl', function ($scope, $window, $location, $ionicLoading, $ionicPopup) {

        $scope.login = function () {
            $ionicLoading.show({
                template: 'Signing in...'
            })
            var username = $('.username').val();
            var password = $('.password').val();
            Parse.User.logIn(username, password, {
                success: function (user) {
                    $ionicLoading.hide();
                    $window.location.replace("app/index.html");
                },
                error: function (user, error) {
                    $ionicLoading.hide();
                    $ionicPopup.alert({
                        title: 'Error',
                        template: error.message + ' <br/>Please try again'
                    }).then(function(res) {
                    });
                }
            });
        }

    })

    .controller('recoverCtrl', function ($scope, $ionicLoading, $ionicLoading, $ionicPopup) {

        $scope.recoverLogin = function () {
            $ionicLoading.show({
                template: 'Recovering...'
            })
            var resetemail = $('.resetemail').val();
            Parse.User.requestPasswordReset(resetemail, {
                success: function () {
                    $ionicLoading.hide();
                    $window.location.replace("app/index.html");
                },
                error: function (error) {
                    $ionicLoading.hide();
                    $ionicPopup.alert({
                        title: 'Error',
                        template: error.message + ' <br/>Please try again'
                    }).then(function(res) {
                    });
                }
            });
        }

    })

    .controller('logoutCtrl', function ($scope, $state, $window, $location) {})

    .controller('signupCtrl', function ($scope, $window, $ionicLoading, $ionicPopup) {
        $scope.signup = function () {
            $ionicLoading.show({
                template: 'Signing you up...'
            })
            var regUser = $('.regUser').val();
            var regEmail = $('.regEmail').val();
            var resPassword = $('.resPassword').val();

            var user = new Parse.User();
            user.set("username", regUser);
            user.set("email", regEmail);
            user.set("password", resPassword);
            user.set("cvTheme", "default");
            user.set("defaultFileType", "pdf"); // word, pdf, html
            user.signUp(null, {
                success: function (user) {
                    Parse.Cloud.run('saveCV', {
                        serverDomain: serverDomain,
                        userSessionToken: sessionTOKEN,
                        ApplicationId: appID,
                        RESTAPIKey: restID,
                        userEmail: sessionEMAIL,
                    }).then(function(response) {
                        $ionicLoading.hide();
                        $window.location.replace("app/index.html");
                    });

                },
                error: function (user, error) {
                    $ionicLoading.hide();
                    $ionicPopup.alert({
                        title: 'Error',
                        template: error.message + ' <br/>Please try again'
                    }).then(function(res) {
                    });
                }
            });
        }
    })

    .controller('settingsCtrl', function ($scope, $http, $ionicLoading) {

        $scope.saveSettings = function () {


        }
    })

    .controller('helpCtrl', function ($scope, $http, $ionicPopup) {

        $scope.contactUs = function () {

            var myPopup = $ionicPopup.show({
                template: '<input type="text" class="from" placeholder="Optional email (Alternate)" />' +
                '<textarea placeholder="Message" class="summary"></textarea></form>',
                title: 'Contact us',
                subTitle: 'Send us any query or bug report',
                scope: $scope,
                cssClass: 'wideInputPopup',
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            var from = $('.from').val();
                            var summary = $('.summary').val();
                            var owner = Parse.User.current();
                            var SupportThread = Parse.Object.extend("SupportThread");
                            var support = new SupportThread();

                            support.set({
                                "from": from,
                                "summary": summary,
                                "sender": sessionEMAIL,
                                "owner": owner,
                            });
                            support.setACL(new Parse.ACL(owner));
                            support.save(null, {
                                success: function (support) {
                                    $ionicLoading.hide();
                                },
                                error: function (support, error) {
                                    $ionicLoading.hide();
                                }
                            });

                        }
                    }
                ]
            });
        }
        $scope.rateapp = function () {

        }

    })

    .controller('statusCtrl', function ($timeout, $scope, $ionicPopup, $ionicLoading, $location, $window, $state, $http, $ionicNavBarDelegate, $ionicPlatform) {


        $scope.logout = function () {
            $ionicLoading.show({
                template: 'Signing out...'
            })
            Parse.User.logOut();
            $ionicLoading.hide();
            $window.location.replace("../#/login");

        };

        $ionicNavBarDelegate.showBackButton(false);
        $ionicLoading.show({
            template: 'Loading'
        });

        var About2 = Parse.Object.extend("About2");
        var query = new Parse.Query(About2);
        query.limit(30);
        query.find({
            success: function(data) {
                var About = JSON.stringify(data),
                    abouts = JSON.parse(About);
                $scope.abouts = abouts;
                setTimeout(function () {
                    $ionicLoading.hide();
                }, 1000);
            },
            error: function(error) {
                $ionicLoading.hide();
            }
        });

        $scope.emailCV = function (about) {
            $ionicPopup.show({
                cssClass: 'wideInputPopup',
                template: '<input type="text" class="fromName" value="'+ about.firstName + ' ' + about.middleName + ' ' + about.lastName + '" placeholder="email" />' +
                '<input type="text" class="toEmail" placeholder="To:" />' +
                '<textarea placeholder="Custom message" class="toMessage"></textarea></form>',
                title: 'Enter Details',
                subTitle: 'You can insert as many as possible',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            var toName = $('.toName').val(),
                                toEmail =  $('.toEmail').val(),
                                fromName =  $('.fromName').val(),
                                toMessage =  $('.toMessage').val();
                            if ( !toEmail ){
                                $ionicPopup.alert({
                                    title: 'Error',
                                    template: 'Please enter email address'
                                })
                            }else{
                                cloudSave()
                            }
                            function cloudSave() {
                                $ionicLoading.show({
                                    template: 'Generating CV...'
                                });
                                Parse.Cloud.run('saveCV', {
                                    serverDomain: serverDomain,
                                    userSessionToken: sessionTOKEN,
                                    ApplicationId: appID,
                                    RESTAPIKey: restID,
                                    userEmail: sessionEMAIL,
                                    fromName: fromName,
                                    toName: toName,
                                    toEmail: toEmail,
                                    toMessage: toMessage,
                                    cvSender: ''
                                }).then(function(response) {
                                    $ionicLoading.hide();
                                    $ionicPopup.alert({
                                        title: 'Success',
                                        template: 'Your Resume has been emailed'
                                    })
                                }, function(error) {
                                    $ionicLoading.hide();
                                    $ionicPopup.alert({
                                        title: 'Error',
                                        template: error.message + ' <br/>Please try again'
                                    }).then(function(res) {
                                    });
                                });
                            }
                        }
                    }
                ]
            });
        };


        $scope.shareNative = function (about) {
            $ionicLoading.show({
                template: 'loading share...'
            });
            $timeout(function () {
                $ionicLoading.hide();
            }, 4000);
                var shareSubject = 'Curriculumn Vitate for' + about.firstName + ' ' + about.lastName;
                var shareMessage = 'Find my attached, curriculum vitae';
                var shareDocument = 'http://api.cvapp.info/public/cv/' + userID + '_default.pdf';

                window.plugins.socialsharing.share(
                    shareMessage,
                    shareSubject,
                    shareDocument
                );


        };


    })

    .controller('sidemenuCtrl', function ($scope, $ionicPopup, $ionicLoading, $location, $window, $state, $http) {
        $scope.logout = function () {
            $ionicLoading.show({
                template: 'Signing out...'
            })
            Parse.User.logOut();
            $ionicLoading.hide();
            $window.location.replace("#/Status");

        };
    })

    .controller('cvapp', function ($scope, $ionicSideMenuDelegate, $route, $ionicPopup, $ionicLoading, $location, $window, $state, $http) {
        $scope.logout = function () {
            $ionicLoading.show({
                template: 'Signing out...'
            })
            Parse.User.logOut();
            $ionicLoading.hide();
            $window.location.replace("#/Status");

        };
    })

