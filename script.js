// Save input data to localStorage and navigate to preview page
function saveAndPreview() {
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        qualification: document.getElementById('qualification').value,
        institution: document.getElementById('institution').value,
        gradYear: document.getElementById('gradYear').value,
        jobTitle: document.getElementById('jobTitle').value,
        company: document.getElementById('company').value,
        duration: document.getElementById('duration').value,
        skills: document.getElementById('skills').value,
    };

    // Save data to localStorage
    localStorage.setItem('resumeData', JSON.stringify(formData));

    // Navigate to the preview page
    window.location.href = 'preview.html';
}

// Display resume data on preview page
window.onload = function () {
    const resumeData = JSON.parse(localStorage.getItem('resumeData'));
    if (resumeData && document.getElementById('resumePreview')) {
        const previewContainer = document.getElementById('resumePreview');
        
        previewContainer.innerHTML = `
            <section>
                <h2>Personal Information</h2>
                <p><strong>Full Name:</strong> ${resumeData.fullName}</p>
                <p><strong>Email:</strong> ${resumeData.email}</p>
                <p><strong>Phone:</strong> ${resumeData.phone}</p>
                <p><strong>Address:</strong> ${resumeData.address}</p>
            </section>
            <section>
                <h2>Education</h2>
                <p><strong>Highest Qualification:</strong> ${resumeData.qualification}</p>
                <p><strong>Institution Name:</strong> ${resumeData.institution}</p>
                <p><strong>Graduation Year:</strong> ${resumeData.gradYear}</p>
            </section>
            <section>
                <h2>Experience</h2>
                <p><strong>Job Title:</strong> ${resumeData.jobTitle}</p>
                <p><strong>Company Name:</strong> ${resumeData.company}</p>
                <p><strong>Duration:</strong> ${resumeData.duration}</p>
            </section>
            <section>
                <h2>Skills</h2>
                <p>${resumeData.skills}</p>
            </section>
        `;

        // Enhance readability with spacing
        previewContainer.querySelectorAll('section').forEach((section) => {
            section.style.marginBottom = '1.5rem';
        });
    }
};

// Print/download resume
function printResume() {
    window.print();
}
