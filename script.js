// JavaScript code để xử lý các hành động khác nếu cần
document.addEventListener('DOMContentLoaded', function () {
    const emailLink = document.getElementById('emailLink');

    // Thêm sự kiện nếu cần cho việc xử lý email
    emailLink.addEventListener('click', function () {
        console.log('Email link clicked');
        // Bạn có thể thực hiện các hành động khác ở đây, chẳng hạn như gửi email hoặc ghi nhận dữ liệu
    });
});
