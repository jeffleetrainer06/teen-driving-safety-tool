// Teen Driving Safety Application JavaScript

// Application data
const appData = {
  "teen_fatalities_2004_2023": [
    {"Year": 2004, "Young_Drivers_15_20_Deaths": 3634, "Passenger_Deaths_Young_Drivers": 2402, "Total_Young_Driver_Related_Deaths": 6036},
    {"Year": 2005, "Young_Drivers_15_20_Deaths": 3474, "Passenger_Deaths_Young_Drivers": 2197, "Total_Young_Driver_Related_Deaths": 5671},
    {"Year": 2006, "Young_Drivers_15_20_Deaths": 3490, "Passenger_Deaths_Young_Drivers": 2177, "Total_Young_Driver_Related_Deaths": 5667},
    {"Year": 2007, "Young_Drivers_15_20_Deaths": 3190, "Passenger_Deaths_Young_Drivers": 2044, "Total_Young_Driver_Related_Deaths": 5234},
    {"Year": 2008, "Young_Drivers_15_20_Deaths": 2742, "Passenger_Deaths_Young_Drivers": 1662, "Total_Young_Driver_Related_Deaths": 4404},
    {"Year": 2009, "Young_Drivers_15_20_Deaths": 2343, "Passenger_Deaths_Young_Drivers": 1456, "Total_Young_Driver_Related_Deaths": 3799},
    {"Year": 2010, "Young_Drivers_15_20_Deaths": 1965, "Passenger_Deaths_Young_Drivers": 1333, "Total_Young_Driver_Related_Deaths": 3298},
    {"Year": 2011, "Young_Drivers_15_20_Deaths": 1965, "Passenger_Deaths_Young_Drivers": 1333, "Total_Young_Driver_Related_Deaths": 3298},
    {"Year": 2012, "Young_Drivers_15_20_Deaths": 1880, "Passenger_Deaths_Young_Drivers": 1060, "Total_Young_Driver_Related_Deaths": 2940},
    {"Year": 2013, "Young_Drivers_15_20_Deaths": 1696, "Passenger_Deaths_Young_Drivers": 1069, "Total_Young_Driver_Related_Deaths": 2765},
    {"Year": 2014, "Young_Drivers_15_20_Deaths": 1723, "Passenger_Deaths_Young_Drivers": 1015, "Total_Young_Driver_Related_Deaths": 2738},
    {"Year": 2015, "Young_Drivers_15_20_Deaths": 1903, "Passenger_Deaths_Young_Drivers": 982, "Total_Young_Driver_Related_Deaths": 2885},
    {"Year": 2016, "Young_Drivers_15_20_Deaths": 1916, "Passenger_Deaths_Young_Drivers": 1033, "Total_Young_Driver_Related_Deaths": 2949},
    {"Year": 2017, "Young_Drivers_15_20_Deaths": 1844, "Passenger_Deaths_Young_Drivers": 986, "Total_Young_Driver_Related_Deaths": 2830},
    {"Year": 2018, "Young_Drivers_15_20_Deaths": 1729, "Passenger_Deaths_Young_Drivers": 919, "Total_Young_Driver_Related_Deaths": 2648},
    {"Year": 2019, "Young_Drivers_15_20_Deaths": 1603, "Passenger_Deaths_Young_Drivers": 880, "Total_Young_Driver_Related_Deaths": 2483},
    {"Year": 2020, "Young_Drivers_15_20_Deaths": 1885, "Passenger_Deaths_Young_Drivers": 1081, "Total_Young_Driver_Related_Deaths": 2966},
    {"Year": 2021, "Young_Drivers_15_20_Deaths": 2109, "Passenger_Deaths_Young_Drivers": 1102, "Total_Young_Driver_Related_Deaths": 3211},
    {"Year": 2022, "Young_Drivers_15_20_Deaths": 2032, "Passenger_Deaths_Young_Drivers": 1050, "Total_Young_Driver_Related_Deaths": 3082},
    {"Year": 2023, "Young_Drivers_15_20_Deaths": 2146, "Passenger_Deaths_Young_Drivers": 1116, "Total_Young_Driver_Related_Deaths": 3262}
  ],
  "age_gender_crash_rates": [
    {"Age_Group": "15-16", "Male_Crash_Rate_Per_100M_Miles": 8.9, "Female_Crash_Rate_Per_100M_Miles": 5.4, "Risk_Ratio_Male_to_Female": 1.65},
    {"Age_Group": "17-18", "Male_Crash_Rate_Per_100M_Miles": 16.0, "Female_Crash_Rate_Per_100M_Miles": 8.3, "Risk_Ratio_Male_to_Female": 1.93},
    {"Age_Group": "19-20", "Male_Crash_Rate_Per_100M_Miles": 18.8, "Female_Crash_Rate_Per_100M_Miles": 8.8, "Risk_Ratio_Male_to_Female": 2.14},
    {"Age_Group": "21-25", "Male_Crash_Rate_Per_100M_Miles": 16.5, "Female_Crash_Rate_Per_100M_Miles": 8.2, "Risk_Ratio_Male_to_Female": 2.01}
  ],
  "accident_causes": [
    {"Cause": "Not Wearing Seatbelts", "Percentage_Fatal_Crashes_2023": 50, "Deaths_2023": 1354, "Trend_2019_2023": -2},
    {"Cause": "Speeding", "Percentage_Fatal_Crashes_2023": 43, "Deaths_2023": 1984, "Trend_2019_2023": 8.7},
    {"Cause": "Inexperience/Poor Judgment", "Percentage_Fatal_Crashes_2023": 35, "Deaths_2023": 1131, "Trend_2019_2023": 5},
    {"Cause": "Alcohol/DUI", "Percentage_Fatal_Crashes_2023": 30, "Deaths_2023": 687, "Trend_2019_2023": 8.7},
    {"Cause": "Night Driving", "Percentage_Fatal_Crashes_2023": 45, "Deaths_2023": 1372, "Trend_2019_2023": 3},
    {"Cause": "Teen Passengers", "Percentage_Fatal_Crashes_2023": 25, "Deaths_2023": 763, "Trend_2019_2023": 10},
    {"Cause": "Aggressive Driving", "Percentage_Fatal_Crashes_2023": 20, "Deaths_2023": 610, "Trend_2019_2023": 15},
    {"Cause": "Distracted Driving", "Percentage_Fatal_Crashes_2023": 17.6, "Deaths_2023": 348, "Trend_2019_2023": 17.6},
    {"Cause": "Weather/Road Conditions", "Percentage_Fatal_Crashes_2023": 15, "Deaths_2023": 458, "Trend_2019_2023": -5},
    {"Cause": "Drowsy Driving", "Percentage_Fatal_Crashes_2023": 12, "Deaths_2023": 366, "Trend_2019_2023": 8}
  ],
  "proven_interventions": [
    {"Intervention": "In-Vehicle Monitoring Systems", "Crash_Reduction_Percentage": 30, "Fatality_Reduction_Percentage": 35, "Implementation_Difficulty": "High", "Cost_Effectiveness": "Low"},
    {"Intervention": "Parent-Teen Driving Agreements", "Crash_Reduction_Percentage": 25, "Fatality_Reduction_Percentage": 30, "Implementation_Difficulty": "Low", "Cost_Effectiveness": "Very High"},
    {"Intervention": "Night Driving Restrictions", "Crash_Reduction_Percentage": 20, "Fatality_Reduction_Percentage": 25, "Implementation_Difficulty": "Medium", "Cost_Effectiveness": "High"},
    {"Intervention": "Passenger Restrictions", "Crash_Reduction_Percentage": 18, "Fatality_Reduction_Percentage": 22, "Implementation_Difficulty": "Medium", "Cost_Effectiveness": "High"},
    {"Intervention": "Graduated Driver Licensing (GDL)", "Crash_Reduction_Percentage": 19, "Fatality_Reduction_Percentage": 21, "Implementation_Difficulty": "Medium", "Cost_Effectiveness": "High"},
    {"Intervention": "Zero Tolerance Alcohol Laws", "Crash_Reduction_Percentage": 15, "Fatality_Reduction_Percentage": 20, "Implementation_Difficulty": "Medium", "Cost_Effectiveness": "High"},
    {"Intervention": "Increased Supervised Practice Hours", "Crash_Reduction_Percentage": 15, "Fatality_Reduction_Percentage": 18, "Implementation_Difficulty": "Low", "Cost_Effectiveness": "Very High"},
    {"Intervention": "Cell Phone/Texting Bans", "Crash_Reduction_Percentage": 12, "Fatality_Reduction_Percentage": 15, "Implementation_Difficulty": "High", "Cost_Effectiveness": "Medium"},
    {"Intervention": "Primary Seatbelt Laws", "Crash_Reduction_Percentage": 8, "Fatality_Reduction_Percentage": 12, "Implementation_Difficulty": "High", "Cost_Effectiveness": "Medium"},
    {"Intervention": "Driver Education Programs", "Crash_Reduction_Percentage": 10, "Fatality_Reduction_Percentage": 8, "Implementation_Difficulty": "Low", "Cost_Effectiveness": "Medium"}
  ],
  "brain_development": [
    {"Age": "15-16", "Prefrontal_Cortex_Development": 60, "Risk_Taking_Propensity": 85, "Attention_Control": 65, "Working_Memory_Capacity": 70, "Impulse_Control": 55},
    {"Age": "17-18", "Prefrontal_Cortex_Development": 70, "Risk_Taking_Propensity": 75, "Attention_Control": 75, "Working_Memory_Capacity": 80, "Impulse_Control": 65},
    {"Age": "19-20", "Prefrontal_Cortex_Development": 80, "Risk_Taking_Propensity": 65, "Attention_Control": 85, "Working_Memory_Capacity": 90, "Impulse_Control": 75},
    {"Age": "21-25", "Prefrontal_Cortex_Development": 95, "Risk_Taking_Propensity": 45, "Attention_Control": 95, "Working_Memory_Capacity": 95, "Impulse_Control": 90}
  ]
};

// Chart storage
let charts = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeCharts();
    initializeBrainSlider();
    initializeInteractiveElements();
});

// Tab Management
function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
}

function switchTab(targetTab) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === targetTab) {
            btn.classList.add('active');
        }
    });

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
        if (content.id === targetTab) {
            content.classList.add('active');
        }
    });

    // Initialize charts for the active tab
    setTimeout(() => {
        if (targetTab === 'trends') {
            createTrendsChart();
        } else if (targetTab === 'age-groups') {
            createAgeGroupChart();
        } else if (targetTab === 'gender') {
            createGenderChart();
        } else if (targetTab === 'causes') {
            createCausesChart();
        } else if (targetTab === 'solutions') {
            createSolutionsChart();
        }
    }, 100);
}

// Chart Initialization
function initializeCharts() {
    // Charts will be created when tabs are activated
}

// Trends Chart
function createTrendsChart() {
    const ctx = document.getElementById('trendsChart');
    if (!ctx || charts.trends) return;

    const data = appData.teen_fatalities_2004_2023;
    
    charts.trends = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.Year),
            datasets: [
                {
                    label: 'Total Young Driver Related Deaths',
                    data: data.map(d => d.Total_Young_Driver_Related_Deaths),
                    borderColor: '#00BCD4',
                    backgroundColor: 'rgba(0, 188, 212, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Young Driver Deaths (15-20)',
                    data: data.map(d => d.Young_Drivers_15_20_Deaths),
                    borderColor: '#FF5722',
                    backgroundColor: 'rgba(255, 87, 34, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Teen Driving Deaths: 20-Year Trend (2004-2023)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    color: '#212E3C'
                },
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y.toLocaleString() + ' deaths';
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Year'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Number of Deaths'
                    },
                    beginAtZero: false
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
}

// Age Group Chart
function createAgeGroupChart() {
    const ctx = document.getElementById('ageGroupChart');
    if (!ctx || charts.ageGroup) return;

    charts.ageGroup = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['15-16', '17-18', '19-20', '21-25'],
            datasets: [
                {
                    label: '2022 Crash Rate',
                    data: [4.8, 3.9, 3.3, 2.3],
                    backgroundColor: 'rgba(0, 188, 212, 0.8)',
                    borderColor: '#00BCD4',
                    borderWidth: 1
                },
                {
                    label: '2023 Crash Rate',
                    data: [4.9, 4.0, 3.4, 2.4],
                    backgroundColor: 'rgba(255, 87, 34, 0.8)',
                    borderColor: '#FF5722',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Fatal Crash Rates by Age Group (Per 100 Million Miles)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Age Group'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Fatal Crashes per 100 Million Miles'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}

// Gender Chart
function createGenderChart() {
    const ctx = document.getElementById('genderChart');
    if (!ctx || charts.gender) return;

    const data = appData.age_gender_crash_rates;

    charts.gender = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.Age_Group),
            datasets: [
                {
                    label: 'Male Crash Rate',
                    data: data.map(d => d.Male_Crash_Rate_Per_100M_Miles),
                    backgroundColor: 'rgba(244, 67, 54, 0.8)',
                    borderColor: '#F44336',
                    borderWidth: 1
                },
                {
                    label: 'Female Crash Rate',
                    data: data.map(d => d.Female_Crash_Rate_Per_100M_Miles),
                    backgroundColor: 'rgba(76, 175, 80, 0.8)',
                    borderColor: '#4CAF50',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Fatal Crash Rates by Gender and Age (Per 100 Million Miles)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Age Group'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Fatal Crashes per 100 Million Miles'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}

// Causes Chart
function createCausesChart() {
    const ctx = document.getElementById('causesChart');
    if (!ctx || charts.causes) return;

    const data = appData.accident_causes;

    charts.causes = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: data.map(d => d.Cause),
            datasets: [{
                label: 'Deaths in 2023',
                data: data.map(d => d.Deaths_2023),
                backgroundColor: [
                    '#F44336', '#FF5722', '#FF9800', '#FFC107', '#FFEB3B',
                    '#CDDC39', '#8BC34A', '#4CAF50', '#009688', '#00BCD4'
                ],
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Teen Driving Deaths by Cause (2023)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Number of Deaths'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}

// Solutions Chart
function createSolutionsChart() {
    const ctx = document.getElementById('solutionsChart');
    if (!ctx || charts.solutions) return;

    const data = appData.proven_interventions;

    charts.solutions = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.Intervention.length > 25 ? d.Intervention.substring(0, 25) + '...' : d.Intervention),
            datasets: [{
                label: 'Fatality Reduction %',
                data: data.map(d => d.Fatality_Reduction_Percentage),
                backgroundColor: 'rgba(76, 175, 80, 0.8)',
                borderColor: '#4CAF50',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Effectiveness of Teen Driving Safety Interventions',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Intervention'
                    },
                    ticks: {
                        maxRotation: 45,
                        minRotation: 45
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Fatality Reduction Percentage'
                    },
                    beginAtZero: true,
                    max: 40
                }
            }
        }
    });
}

// Brain Development Slider
function initializeBrainSlider() {
    const slider = document.getElementById('ageSlider');
    const currentAgeSpan = document.getElementById('currentAge');
    
    if (!slider || !currentAgeSpan) return;

    const brainData = {
        15: {age: "15-16", prefrontal: 60, risk: 85, attention: 65, impulse: 55},
        16: {age: "15-16", prefrontal: 60, risk: 85, attention: 65, impulse: 55},
        17: {age: "17-18", prefrontal: 70, risk: 75, attention: 75, impulse: 65},
        18: {age: "17-18", prefrontal: 70, risk: 75, attention: 75, impulse: 65},
        19: {age: "19-20", prefrontal: 80, risk: 65, attention: 85, impulse: 75},
        20: {age: "19-20", prefrontal: 80, risk: 65, attention: 85, impulse: 75},
        21: {age: "21-25", prefrontal: 85, risk: 55, attention: 90, impulse: 80},
        22: {age: "21-25", prefrontal: 88, risk: 52, attention: 92, impulse: 82},
        23: {age: "21-25", prefrontal: 90, risk: 50, attention: 93, impulse: 85},
        24: {age: "21-25", prefrontal: 93, risk: 47, attention: 94, impulse: 88},
        25: {age: "21-25", prefrontal: 95, risk: 45, attention: 95, impulse: 90}
    };

    function updateBrainMetrics(age) {
        const data = brainData[age];
        if (!data) return;

        // Update age display
        currentAgeSpan.textContent = age;

        // Update progress bars and values
        updateMetric('prefrontalProgress', 'prefrontalValue', data.prefrontal);
        updateMetric('riskProgress', 'riskValue', data.risk);
        updateMetric('attentionProgress', 'attentionValue', data.attention);
        updateMetric('impulseProgress', 'impulseValue', data.impulse);
    }

    function updateMetric(progressId, valueId, percentage) {
        const progressBar = document.getElementById(progressId);
        const valueSpan = document.getElementById(valueId);
        
        if (progressBar && valueSpan) {
            progressBar.style.width = percentage + '%';
            valueSpan.textContent = percentage + '%';
        }
    }

    // Initialize with default value
    updateBrainMetrics(parseInt(slider.value));

    // Add event listener for slider changes
    slider.addEventListener('input', function() {
        updateBrainMetrics(parseInt(this.value));
    });
}

// Interactive Elements
function initializeInteractiveElements() {
    // Add click handlers for cause cards
    document.querySelectorAll('.cause-card').forEach(card => {
        card.addEventListener('click', function() {
            const details = this.querySelector('.cause-details');
            if (details) {
                const isHidden = details.style.display === 'none' || !details.style.display;
                
                // Hide all other details
                document.querySelectorAll('.cause-details').forEach(detail => {
                    detail.style.display = 'none';
                });
                
                // Toggle this one
                details.style.display = isHidden ? 'block' : 'none';
            }
        });
    });
}

// Action Plan Generator
function generatePlan() {
    const teenAge = document.getElementById('teenAge').value;
    const privilegeLevel = document.getElementById('privilegeLevel').value;
    const planDiv = document.getElementById('personalizedPlan');
    
    if (!planDiv) return;

    let planHTML = '<div class="personalized-recommendations">';
    planHTML += `<h4>Personalized Plan for ${teenAge}-year-old (${privilegeLevel})</h4>`;
    
    // Age-specific recommendations
    if (teenAge <= 16) {
        planHTML += `
            <div class="plan-section critical">
                <h5>High Priority (Age ${teenAge})</h5>
                <ul>
                    <li>Maximum supervision - at least 50% of trips with experienced driver</li>
                    <li>No teen passengers for first 6-12 months</li>
                    <li>Night driving restricted to family emergencies only</li>
                    <li>Speed monitoring essential - install GPS tracking</li>
                    <li>Complete phone ban - not even hands-free</li>
                </ul>
            </div>
        `;
    } else if (teenAge <= 18) {
        planHTML += `
            <div class="plan-section warning">
                <h5>Continued High Risk (Age ${teenAge})</h5>
                <ul>
                    <li>Graduated passenger privileges - one approved friend after 6 months</li>
                    <li>Extend night restrictions to 9-10 PM for first year</li>
                    <li>GPS monitoring recommended for speed compliance</li>
                    <li>Regular safety discussions about peer pressure</li>
                    <li>Consider in-vehicle monitoring system</li>
                </ul>
            </div>
        `;
    } else {
        planHTML += `
            <div class="plan-section moderate">
                <h5>Moderate Risk Management (Age ${teenAge})</h5>
                <ul>
                    <li>Open communication about alcohol availability and risks</li>
                    <li>Continued monitoring through family tracking apps</li>
                    <li>Financial leverage for safety compliance</li>
                    <li>Emergency planning and safe ride alternatives</li>
                    <li>Focus on long-term safety habit building</li>
                </ul>
            </div>
        `;
    }
    
    planHTML += '</div>';
    planDiv.innerHTML = planHTML;
    
    // Scroll to the plan
    planDiv.scrollIntoView({ behavior: 'smooth' });
}

// Download functions (placeholder implementations)
function downloadContract() {
    alert('Driving contract template would be downloaded here. Contact Jeff Lee at 720-416-6955 for the template.');
}

function showPhoneStrategies() {
    alert('Phone control strategies:\n\n1. Complete device ban while driving\n2. Phone in "Do Not Disturb" mode\n3. Phone placed in glove compartment\n4. Use driving apps that block notifications\n5. Family tracking to ensure compliance');
}

function showNightGuidelines() {
    alert('Night driving guidelines:\n\n1. No unsupervised driving after 8-9 PM first year\n2. Gradual curfew extensions based on safety record\n3. Pre-approval required for night activities\n4. Practice night driving in controlled conditions\n5. Enhanced supervision during winter months');
}

function downloadReviewTemplate() {
    alert('Monthly safety review template would be downloaded here. Contact Jeff Lee for templates and resources.');
}

function showMilestones() {
    alert('Milestone ideas:\n\n• 3 months crash-free: Later bedtime\n• 6 months clean record: Friend passenger\n• 1 year safe driving: Extended privileges\n• Perfect attendance: Vehicle privileges\n• Safe handling of challenges: Recognition');
}

// Social sharing functions
function shareOnSocial(platform) {
    const url = window.location.href;
    const text = "Check out this comprehensive Teen Driving Safety tool with 20 years of research data to help protect young drivers!";
    
    let shareUrl = '';
    
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Utility functions for responsive chart handling
function handleResize() {
    Object.values(charts).forEach(chart => {
        if (chart) {
            chart.resize();
        }
    });
}

// Add resize listener
window.addEventListener('resize', handleResize);
