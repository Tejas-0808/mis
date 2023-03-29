import React from 'react';
import $ from 'jquery';
const StuNavbar = () => {
    $("#team").click(function () {
        $(".team").toggle();
    });

    return (
        <>

            <nav class="navbar navbar-expand-md navbar-dark bg-dark justify-content-right">
                <div class="navbar-toggler-right justify-content-right" style="align: right;">
                    <button class="navbar-toggler justify-content-right" type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-label="Toggle navigation" style="float: right;">
                        <span class="navbar-toggler-icon justify-content-right" style="float: right;"></span>
                    </button>
                </div>




                <div class="collapse navbar-collapse flex-column " id="navbar">

                    <ul class="navbar-nav  w-100 justify-content-center px-3">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">whos live <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">schedule <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">about <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">contact <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#team" id="team">team <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>

                    <ul class="team navbar-nav justify-content-center w-100 bg-secondary px-3" style="display:none;">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">swiss_cheesus <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">trickingloki <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">justmejude <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">tobimclovin <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">footy <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default StuNavbar;