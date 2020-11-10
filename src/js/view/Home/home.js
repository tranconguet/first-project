import {elements} from '../../utility/elements';

export const renderHomePage = () => {
    const markup = `
    <section id="slider" class="clear">
        <figure>
        <img src="https://cdn.itviec.com/employers/hahalolo/logo/w170/j3k2itM8WfRFD3q7xkayU1Yo/hahalolo-logo.png" alt="">
        <figcaption>
            <h2>JavaScript Developer (NodeJS/ReactJS)</h2>
            <p>Mạng Xã Hội Du Lịch Hahalolo.com</p>
            <footer class="more"><a href="http://localhost:8080/developer-javascript-html-css-hahalolo-2655">Read More &raquo;</a></footer>
        </figcaption>
        </figure>
    </section>
    <div id="intro">
        <section class="clear">
            <article class="two_quarter">
                <h2>Why you love working here: </h2>
                <ul>
                    <li>Thưởng theo hiệu suất công việc + Thưởng năng lực vượt trội + Các gói thưởng Dự Án.</li>
                    <li>Xét duyệt lương hàng năm.</li>
                    <li>Lộ trình thăng tiến & định hướng nghề nghiêp rõ ràng</li>
                    <li>Các ngày nghỉ phép trong năm và chế độ BHXH đúng theo qui định</li>
                    <li>Môi trường làm việc start up và qui mô toàn cầu</li>
                </ul>
            </article>
            <!-- article 2 -->
            <article class="two_quarter lastbox">
                <figure>
                <ul class="clear">
                    <li><a href="http://localhost:8080/companies/zalo"><img src="https://cdn.itviec.com/employers/zalo/logo/w170/3LCycUB7awD7KLYUor3dgJWq/zalocareers_blue_2.png" width="130" height="130" alt=""></a></li>
                    <li><a href="http://localhost:8080/companies/favie-tech"><img src="https://cdn.itviec.com/employers/favie-tech/logo/w170/p54L4zhX8ye12otWyPRjx2fA/0.png" width="130" height="130" alt=""></a></li>
                    <li class="last"><a href="http://localhost:8080/companies/sgh-asia-ltd"><img src="https://cdn.itviec.com/employers/sgh-asia-ltd/logo/w170/u6NKVMpfLpcaxFuogS3GkiDs/SGH-Asia-_-profile-picture-Dec-19%20IT%20VIEC.jpg" width="130" height="130" alt=""></a></li>
                </ul>
                <figcaption><a href="http://localhost:8080/#jobs">View More Jobs For You Here &raquo;</a></figcaption>
                </figure>
            </article>
        </section>
    </div>`;
    elements.container.insertAdjacentHTML('beforeend', markup);
};