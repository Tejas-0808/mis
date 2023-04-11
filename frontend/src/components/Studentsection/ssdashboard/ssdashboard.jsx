import "../../../styles/Student/dashboard.css";

export default function ssdashboard() {
    return (
        <>
            <div class="h-screen w-auto flex-grow-1 overflow-y-lg-auto position-relative">
                <main class="py-6">
                    <div class="container-fluid">
                        <div class="row g-6 mb-6">
                            <div class="col-xl-3 col-sm-6 col-12">
                                <div class="card shadow border-0">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <span class="h6 font-semibold text-sm d-block mb-2">Overall Students</span>
                                                <span class="h3 font-bold mb-0">3568</span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                                    <i class="bi bi-credit-card"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-2 mb-0 text-sm">
                                            <span class="badge badge-pill bg-soft-success text-success me-2">
                                                <i class="bi bi-arrow-up me-1"></i>13%
                                            </span>
                                            <span class="text-nowrap text-xs text-muted">Since last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 col-12">
                                <div class="card shadow border-0">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <span class="h6 font-semibold text-sm d-block mb-2">Total Male</span>
                                                <span class="h3 font-bold mb-0">2100</span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                                    <i class="bi bi-people"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-2 mb-0 text-sm">
                                            <span class="badge badge-pill bg-soft-success text-success me-2">
                                                <i class="bi bi-arrow-up me-1"></i>30%
                                            </span>
                                            <span class="text-nowrap text-xs text-muted">Since last month</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 col-12">
                                <div class="card shadow border-0">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <span class="h6 font-semibold text-sm d-block mb-2">Total Female</span>
                                                <span class="h3 font-bold mb-0">1200</span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                                                    <i class="bi bi-clock-history"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-2 mb-0 text-sm">
                                            <span class="badge badge-pill bg-soft-danger text-danger me-2">
                                                <i class="bi bi-arrow-down me-1"></i>Stopped
                                            </span>
                                            <span class="text-nowrap text-xs text-muted">Since last week</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 col-12">
                                <div class="card shadow border-0">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col">
                                                <span class="h6 font-semibold text-sm d-block mb-2">Total Users</span>
                                                <span class="h3 font-bold mb-0">4000</span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                                    <i class="bi bi-minecart-loaded"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-2 mb-0 text-sm">
                                            <span class="badge badge-pill bg-soft-success text-success me-2">
                                                <i class="bi bi-arrow-up me-1"></i>Applicable
                                            </span>
                                            <span class="text-nowrap text-xs text-muted">Since last 2 months</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </>
    )
}