document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        summary: document.getElementById('summary').value,
        experience: document.getElementById('experience').value,
        education: document.getElementById('education').value
    };
    
    var selectedTemplate = document.getElementById('template').value;
    
    var resumeContent = `
        <h2>${formData.fullName}</h2>
        <p>Email: ${formData.email}</p>
        <p>Phone: ${formData.phone}</p>
        <p>Address: ${formData.address}</p>
        <h3>Summary</h3>
        <p>${formData.summary}</p>
        <h3>Experience</h3>
        <p>${formData.experience}</p>
        <h3>Education</h3>
        <p>${formData.education}</p>
    `;
    
    var resumePreview = document.getElementById('resumePreview');
    resumePreview.className = selectedTemplate;
    resumePreview.innerHTML = resumeContent;

    document.getElementById('downloadButton').style.display = 'block';
});

document.getElementById('downloadButton').addEventListener('click', function() {
    // Get the resume content from the resume preview
    var resumeContent = document.getElementById('resumePreview').innerHTML;

    // Create a Blob containing the resume content
    var blob = new Blob([resumeContent], { type: "text/html" });

    // Create a URL for the Blob
    var url = window.URL.createObjectURL(blob);

    // Create a link element
    var a = document.createElement('a');
    a.href = url;

    // Set the filename for the downloaded file
    a.download = 'resume.html';

    // Append the link to the document body
    document.body.appendChild(a);

    // Simulate a click event to trigger the download
    a.click();

    // Clean up
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);


});
