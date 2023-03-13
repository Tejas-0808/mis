import React from 'react'
import "../../../styles/Student/profile.css";

function Profile() {
    // $(function () {

    //     // We can attach the `fileselect` event to all file inputs on the page
    //     $(document).on('change', ':file', function () {
    //         var input = $(this),
    //             numFiles = input.get(0).files ? input.get(0).files.length : 1,
    //             label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    //         input.trigger('fileselect', [numFiles, label]);
    //     });

    //     // We can watch for our custom `fileselect` event like this
    //     $(document).ready(function () {
    //         $(':file').on('fileselect', function (event, numFiles, label) {

    //             var input = $(this).parents('.input-group').find(':text'),
    //                 log = numFiles > 1 ? numFiles + ' files selected' : label;

    //             if (input.length) {
    //                 input.val(log);
    //             } else {
    //                 if (log) alert(log);
    //             }

    //         });
    //     });
    // });

    // // Function for Specilization Input
    // $(function () {
    //     var availableTags = [
    //         "ActionScript",
    //         "AppleScript",
    //         "Asp",
    //         "BASIC",
    //         "C",
    //         "C++",
    //         "Clojure",
    //         "COBOL",
    //         "ColdFusion",
    //         "Erlang",
    //         "Fortran",
    //         "Groovy",
    //         "Haskell",
    //         "Java",
    //         "JavaScript",
    //         "Lisp",
    //         "Perl",
    //         "PHP",
    //         "Python",
    //         "Ruby",
    //         "Scala",
    //         "Scheme"
    //     ];
    //     $("#tags").autocomplete({
    //         source: availableTags
    //     });
    // });

    // // Function for Designation Input
    // $(function () {
    //     var availableTags = [
    //         "Analyst L1",
    //         "Analyst L2",
    //         "Senior Analyst",
    //         "UI Developer L1",
    //         "UI Developer L2",
    //         "Senior UI Developer",
    //         "Graphics Designer L1",
    //         "Graphics Designer L2",
    //         "Senior Graphics Designer",
    //     ];
    //     $("#designation").autocomplete({
    //         source: availableTags
    //     });
    // });

    // $('form').submit(function () {
    //     $('.thanks').show();
    //     $('.thanks').delay(2000).fadeOut();
    //     window.setInterval(function () {
    //         window.location.reload();
    //         $('form input#name').focus();
    //     }, 2500);
    //     event.preventDefault(); // Here triggering stops
    // });

    // // Autocomplete for Specialization
    // $("#tags").autocomplete({
    //     source: tags,
    //     //To select only from the autocomplete
    //     change: function (event, ui) {
    //         if (ui.item == null || ui.item == undefined) {
    //             $(this).val("");
    //             $(this).attr("disabled", false);
    //         }
    //     }
    // });

    // // Autocomplete for Designation
    // $("#designation").autocomplete({
    //     source: tags,
    //     //To select only from the autocomplete
    //     change: function (event, ui) {
    //         if (ui.item == null || ui.item == undefined) {
    //             $(this).val("");
    //             $(this).attr("disabled", false);
    //         }
    //     }
    // });


    return (
        <>
            <form class="form">
                <h2>User Profile</h2>
                <div class="form-group">
                    <label for="email">Full Name:</label>
                    <div class="relative">
                        <input class="form-control" id="name" type="text" pattern="[a-zA-Z\s]+" required="" autofocus="" title="Username should only contain letters. e.g. Piyush Gupta" autocomplete="" placeholder="Type your name here..." />
                        <i class="fa fa-user"></i>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <div class="relative">
                        <input class="form-control" type="email" required="" placeholder="Type your email address..." pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
                        <i class="fa fa-envelope"></i>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Contact Number:</label>
                    <div class="relative">
                        <input class="form-control" type="text" maxlength="10" oninput="this.value=this.value.replace(/[^0-9]/g,'');" required="" placeholder="Type your Mobile Number..." />
                        <i class="fa fa-phone"></i>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Company Name:</label>
                    <div class="relative">
                        <input class="form-control" type="url" pattern="https?://.+" required="" placeholder="Mention your company link(url)..." />
                        <i class="fa fa-building"></i>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Designation:</label>
                    <div class="relative">
                        <input class="form-control" type="text" id="designation" required="" placeholder="Type your designation..." />
                        <i class="fa fa-suitcase"></i>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Specilization:</label>
                    <div class="relative">
                        <input class="form-control" type="text" id="tags" required="" placeholder="Type your specialization..." />
                        <i class="fa fa-css3"></i>
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Attachment:</label>
                    <div class="relative">
                        <div class="input-group">
                            <label class="input-group-btn">
                                <span class="btn btn-default">
                                    Browse&hellip; <input type="file" style="display: none;" multiple />
                                </span>
                            </label>
                            <input type="text" class="form-control" required="" placeholder="Attachment..." readonly />
                            <i class="fa fa-link"></i>
                        </div>
                    </div>
                </div>

                <div class="tright">
                    <a href=""><button class="movebtn movebtnre" type="Reset"><i class="fa fa-fw fa-refresh"></i> Reset </button></a>
                    <a href=""><button class="movebtn movebtnsu" type="Submit">Submit <i class="fa fa-fw fa-paper-plane"></i></button></a>
                </div>
            </form>

            <div class="thanks" style="display: none;">
                <h4>Thank you!</h4>
                <p><small>Your message has been successfully sent.</small></p>
            </div>
        </>
    )
}

export default Profile;

