function uploadVideos() {
    const files = document.getElementById('videoFiles').files;
    const feedback = document.getElementById('feedback');
    
    if (files.length === 0) {
      feedback.innerHTML = 'Please select at least one video file.';
      return;
    }
  
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('videos[]', files[i]);
    }
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'your_upload_endpoint_here');
    xhr.upload.onprogress = function(event) {
      const progress = (event.loaded / event.total) * 100;
      document.getElementById('uploadProgress').value = progress;
    };
  
    xhr.onload = function() {
      if (xhr.status === 200) {
        feedback.innerHTML = 'Upload successful!';
        document.getElementById('uploadProgress').value = 0;
      } else {
        feedback.innerHTML = 'Upload failed. Please try again later.';
      }
    };
  
    xhr.onerror = function() {
      feedback.innerHTML = 'Upload failed. Please try again later.';
    };
  
    xhr.send(formData);
  }
  