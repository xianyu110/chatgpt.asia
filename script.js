// ChatGPT.Asia 基础脚本
document.addEventListener('DOMContentLoaded', function() {
    console.log('ChatGPT.Asia loaded successfully');
    
    // 添加一些基础交互
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this.textContent);
        });
    });
});
