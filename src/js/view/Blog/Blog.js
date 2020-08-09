import {elements} from '../../utility/elements';


export const renderBLog = () =>{
    const markup =`
    <div class="blog_page">
    <div id="logo">
        <img id = logoBlog src="data:image/jpeg;base64,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" alt ="">
    </div>
    <div id ="title">
        <p><b>CON ĐƯỜNG SỰ NGHIỆP IT</b></p>
    </div>
    <div id="intro">
        <p>Đọc ngay để khám phá con đường sự nghiệp IT của Developer qua các bài viết dưới đây.</p>
    </div>
    <div class = "postBlog">
        <h2>Con đường phát triển sự nghiệp (Career Path) cho developer</h2>
        <p>Các bạn sinh viên còn đang học hoặc mới ra trường sẽ khó hình dung được về những vị trí, chức danh trong ngành lập trình. Mình viết bài này nhằm giải đáp một số thắc mắc các bạn thường hỏi như:<br></p>
        <ul>
            <li>Mới đi làm em có chức danh gì, công việc thế nào.</li>
            <li>Code lâu thì lên được chức gì, lương cao không?</li>
            <li>Em thích code thôi, không thích làm trưởng nhóm, em nên định hướng thế nào.</li>
          </ul>  
        <p>Hiểu rõ con đường nghề nghiệp của ngành developer, các bạn sẽ dễ định hình phát triển tương lai của bản thân, cũng như dồn sức vào con đường mình đã chọn.<br>
            <br>Mình chỉ liệt kê con đường nghề nghiệp của 1 developer, vì bản thân mình cũng là developer. Con đường của 1 tester (QA engineer) cũng có 1 số chức danh tương tự, nhưng lên cao sẽ khác. Các chức vụ sẽ được mình miêu tả theo thứ tự từ thấp lên cao nhé.</p>
        <img id = "imgBlog1" src="https://toidicodedao.files.wordpress.com/2015/05/e8b9bfe31536b45c9bc7d039ae9b0e50aea0a6c4f26fbef9ab49e33813228492_large.jpg" alt="Lương Của Developer">
        <p>......</p>
        <a href="https://topdev.vn/blog/con-duong-phat-trien-su-nghiep-career-path-cho-developer/" target="_blank">
        <p>Detail . . .</p>
        </a>
    </div>
    <div class="cut"></div>
    <br><br>
    <div class = "postBlog">
        <h2>2020 rồi, IoT có còn là "kịch bản của thế giới"?</h2>
       <div class="avatar"> <img class="avt" src ="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.15752-9/116873927_309997016786059_9007042032575517764_n.png?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=Lgmu-Ia2kNQAX8dz20K&_nc_ht=scontent.fhan3-1.fna&oh=c1d64e92f44e0ce012d742e2e15babc0&oe=5F54D2CD" alt ="avatar">
       </div>
       <div class="nickName">
           <div class ="Name"><p><b>TINH TO</b><br></p></div>
            <div class="company"><p>SOCIAL CONTENT LEAD</p></div>
           
       </div>
       <div id = "leftPost"><p>"IoT sẽ phát triển thành một ngành công nghiệp giá trị hơn 3.000 tỉ USD trong năm 2026."
        Dự báo được đưa ra bởi tạp chí Business Insider, dựa trên khảo sát thường niên về Internet of Things, phỏng vấn với 35 công ty, tập đoàn lớn về công nghệ.
        <br><br>
        Không riêng gì các developer trẻ hứng thú học IoT để tìm một cơ hộ nghề nghiệp tốt hơn mà các developer lão luyện cũng đã bắt đầu tham gia nghiên cứu IoT để không trở nên lạc hậu.
        <br><br>
       Xem bài phỏng vấn của ITviec với anh Nguyễn Văn Long - Head of IoT tại VNG Corporation để biết:
        <br>
        </p>
        <ul>
            <li>IoT là gì? Ứng dụng của IoT trong đời sống?</li>
            <li>Những tố chất cần thiết để trở thành IoT Developer?</li>
            <li>IoT Developer có cần biết code không?</li>
            <li>Những nguồn tham khảo IoT chất lượng</li>
          </ul>
          <p><a href="https://itviec.com/blog/iot-la-gi/" target="_blank">Detail . . .</a></p>
        </div>
        <div id = "rightPost">
            <img class = "imgRight" src ="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/116880515_719868491903362_3322110165438802730_n.png?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=q5IOu6NQfeEAX_XglTk&_nc_ht=scontent-hkg4-1.xx&oh=d9352b8e3212f1c6ffe2b56ea3f91bc7&oe=5F52FEB9" alt ="">
        </div>

    </div>
    <div class="cut"></div>
    <br><br>
    <div class="postBlog">
        <h2>CTO là gì – Những sự thật cần biết về Chief Technology Officer </h2>
        <p>CTO là gì? Luôn là một câu hỏi mà rất nhiều người trong giới lập trình hiện đang quan tâm. Michel Krieger (Instagram), Werner Hans Peter Vogels (Amazon) hay David Hasson (founder của Ruby on Rail) đều là những CTO tiêu biểu, những người tiên phong trong việc thay đổi thế giới bằng những ý tưởng công nghệ tiến bộ.
            <br><br>
            Lê Hồng Việt (FPT), Thái Trí Hùng (MoMo), Nguyễn Sơn Tùng (Việc Có) cũng là những Giám đốc công nghệ có tên tuổi tại Việt Nam, tạo nên sự đột phá công nghệ, đưa sản phẩm trong công ty họ lên một tầm cao mới.
            <br><br>
            Có thể thấy, với sự phát triển liên tục của ngành công nghệ thông tin trong những năm vừa qua, CTO không còn là vị trí quá mới lạ đối với cộng đồng IT. Thậm chí thuật ngữ này đã xuất hiện hơn chục năm rồi, vậy mà chúng ta vẫn còn bị nhầm lẫn với các chức vụ khác vì chưa thực sự hiểu rõ trách nhiệm của một CTO.
        </p>
        <img id ="img3" src="https://itchronicles.com/wp-content/uploads/2019/01/bigstock-Cto-Chief-Technology-Officer-273037831.jpg" alt ="CTO">
        <p>.....</p>
        <p><a href="https://topdev.vn/blog/cto-la-gi/" target="_blank">Detail . . .</a></p>
    </div>
    </div>
    `
    elements.container.insertAdjacentHTML('beforeend', markup);
}