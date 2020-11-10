import {elements} from '../../utility/elements';


export const renderAboutUs = () =>{
    const markup =`
    <div id="aboutUs">
        <div id="logoAboutUs">
            <img id="imgAboutUs" src="https://www.hrcsuite.com/wp-content/uploads/2018/08/team.jpg" alt="Team Work">
        </div>
        <div id="title">
            <p>NHÓM 11</p>
        </div>
        <div id="introduce">
            <p>Giới thiệu chung về nhóm 11:</p>
            <ul>
                <li>Nhóm gồm 7 thành viên:</li>
                <ol id="listMember">
                    <li>Trần Văn Công</li>
                    <li>Phạm Ngọc Thắng</li>
                    <li>Chung Trần Thạch</li>
                    <li>Nguyễn Minh Thi</li>
                    <li>Nông Văn Cương</li>
                    <li>Phạm Tiến Đạt</li>
                    <li>Trần Công Minh</li>
                </ol>
                <li>Tất cả đều đang học tập tại trường ĐH Công Nghệ - ĐH Quốc Gia Hà Nội.</li>
            </ul>
            <br><br>
        </div>
        <div id ="logoUET">
            <img id="UET" src="https://lh3.googleusercontent.com/proxy/-b-bUi5grB0cNI2qEsf2K20O3IsHVeDUo1vcbcbjpVPY8Fr34SD1wpA6DTp4JLH7AaYt8k8xfasuOpKLZCbC40rW3Qg" alt="">
        </div>
        <div id ="specific"><p>Giới thiệu cụ thể về từng thành viên:</p></div>
        <div class="nameMember">
            <div class ="LeftAbout">
            <p class="name">Trần Văn Công</p>
            <p>Tôi mong muốn làm web Full Stack và mong muốn học hỏi cũng như mở rộng kiến thức.
                <br><br>
                Tôi yêu thích IT và tôi muốn xây dựng những sản phẩm tuyệt vời giúp CNTT phát triển.
                <br><br>
                Sở thích của tôi là đọc sách, chơi thể thao và đi chơi với bạn bè khi rảnh rỗi. Câu nói yêu thích của tôi là "Cuộc sống là 10% điều gì xảy ra với tôi và 90% là cách tôi phản ứng với nó - Charles R.Swindoll".
                <br><br></p>
            </div>
            <div class="RightAbout">
                <img class ="imgAb" src ="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/80995567_1273751856168491_5147892438857154560_o.jpg?_nc_cat=110&_nc_sid=174925&_nc_ohc=ZljqP23r8WwAX9KBH4K&_nc_ht=scontent.fhan3-1.fna&oh=839eb01e4d426f09a33e94cb0bd227a2&oe=5F5342CC" alt ="">
            </div>
        </div>
        <div class="nameMember">
            <div class ="LeftAbout">
            <p class="name">Phạm Ngọc Thắng</p>
            <p>Tôi mong muốn trở thành một Nhà phát triển web và mong muốn học hỏi cũng như mở rộng kiến thức.
                <br><br>
                Tôi yêu thích IT và tôi muốn xây dựng những sản phẩm tuyệt vời giúp CNTT phát triển.
                <br><br>
                Sở thích của tôi là đọc sách, chơi thể thao và đi du lịch khi rảnh rỗi. Câu nói yêu thích của tôi là "Nếu bạn không thể giải thích nó một cách đơn giản, bạn không hiểu nó đủ rõ - Albert Einstein".
                <br><br>
            </p>
            </div>
            <div class="RightAbout">
                <img class ="imgAb" src ="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/106294959_2780743775546061_5520650437189979607_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=pYU8t3RdQJ4AX-xDgyC&_nc_ht=scontent.fhan3-3.fna&oh=1a302f197509891cb9767a7cdf60bcdf&oe=5F55F49B" alt ="">
            </div>
        </div>
        <div class="nameMember">
            <div class ="LeftAbout">
            <p class="name">Chung Trần Thạch</p>
            <p>Tôi mong muốn làm web Full Stack và mong muốn học hỏi cũng như mở rộng kiến thức.
                <br><br>
                Tôi yêu thích IT và tôi muốn xây dựng những sản phẩm tuyệt vời giúp CNTT phát triển.
                <br><br>
                Sở thích của tôi là đọc sách, chơi thể thao và đi chơi với bạn bè khi rảnh rỗi. Câu nói yêu thích của tôi là "Cuộc sống là 10% điều gì xảy ra với tôi và 90% là cách tôi phản ứng với nó - Charles R.Swindoll".
                <br><br></p>
            </div>
            <div class="RightAbout">
                <img class ="imgAb" src ="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/89437278_3148155485408789_6041843053491126272_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=c54JPaejO3YAX8gEBv7&_nc_ht=scontent.fhan3-3.fna&oh=e55a3ac3701ee7894f5df339f2426f83&oe=5F5659A7" alt ="">
            </div>
        </div>
        <div class="nameMember">
            <div class ="LeftAbout">
            <p class="name">Nguyễn Minh Thi</p>
            <p>Tôi mong muốn trở thành một Nhà phát triển web và mong muốn học hỏi cũng như mở rộng kiến thức.
                <br><br>
                Tôi yêu thích IT và tôi muốn xây dựng những sản phẩm tuyệt vời giúp CNTT phát triển.
                <br><br>
                Sở thích của tôi là đọc sách, chơi thể thao và đi du lịch khi rảnh rỗi. Câu nói yêu thích của tôi là "Nếu bạn không thể giải thích nó một cách đơn giản, bạn không hiểu nó đủ rõ - Albert Einstein".
                <br><br></p>
            </div>
            <div class="RightAbout">
                <img class ="imgAb" src ="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-9/106076230_3423749641183970_680873884852482308_o.jpg?_nc_cat=107&_nc_sid=a4a2d7&_nc_ohc=9H7alukuB5sAX8uAa24&_nc_ht=scontent.fhan3-2.fna&oh=f8070d94bdfd81110a818730c4135a06&oe=5F547B26" alt ="">
            </div>
        </div>
        <div class="nameMember">
            <div class ="LeftAbout">
            <p class="name">Nông Văn Cương</p>
            <p>Tôi mong muốn làm web Full Stack và mong muốn học hỏi cũng như mở rộng kiến thức.
                <br><br>
                Tôi yêu thích IT và tôi muốn xây dựng những sản phẩm tuyệt vời giúp CNTT phát triển.
                <br><br>
                Sở thích của tôi là đọc sách, chơi thể thao và đi chơi với bạn bè khi rảnh rỗi. Câu nói yêu thích của tôi là "Cuộc sống là 10% điều gì xảy ra với tôi và 90% là cách tôi phản ứng với nó - Charles R.Swindoll".
                <br><br></p>
            </div>
            <div class="RightAbout">
                <img class ="imgAb" src ="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/45939452_2513878472234668_5891960922632617984_o.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=P8uNxf0xng8AX9PZYQA&_nc_ht=scontent.fhan4-1.fna&oh=46fe69d24fe42601ac6842db86d53138&oe=5F5320F1" alt ="">
            </div>
        </div>
        <div class="nameMember">
            <div class ="LeftAbout">
            <p class="name">Phạm Tiến Đạt</p>
            <p>Tôi mong muốn trở thành một Nhà phát triển web và mong muốn học hỏi cũng như mở rộng kiến thức.
                <br><br>
                Tôi yêu thích IT và tôi muốn xây dựng những sản phẩm tuyệt vời giúp CNTT phát triển.
                <br><br>
                Sở thích của tôi là đọc sách, chơi thể thao và đi du lịch khi rảnh rỗi. Câu nói yêu thích của tôi là "Nếu bạn không thể giải thích nó một cách đơn giản, bạn không hiểu nó đủ rõ - Albert Einstein".
                <br><br></p>
            </div>
            <div class="RightAbout">
                <img class ="imgAb" src ="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/62398236_103731834235957_4492392515801972736_o.jpg?_nc_cat=106&_nc_sid=e3f864&_nc_ohc=yMo8Et1_sGEAX-Py7z0&_nc_ht=scontent.fhan3-3.fna&oh=fcd4cef034409b9419650b0b1d1f1285&oe=5F53F0DB" alt ="">
            </div>
        </div>
        <div class="nameMember">
            <div class ="LeftAbout">
            <p class="name">Trần Công Minh</p>
            <p>Tôi mong muốn làm web Full Stack và mong muốn học hỏi cũng như mở rộng kiến thức.
                <br><br>
                Tôi yêu thích IT và tôi muốn xây dựng những sản phẩm tuyệt vời giúp CNTT phát triển.
                <br><br>
                Sở thích của tôi là đọc sách, chơi thể thao và đi chơi với bạn bè khi rảnh rỗi. Câu nói yêu thích của tôi là "Cuộc sống là 10% điều gì xảy ra với tôi và 90% là cách tôi phản ứng với nó - Charles R.Swindoll".
                <br><br></p>
            </div>
            <div class="RightAbout">
                <img class ="imgAb" src ="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.0-9/67655787_124439635498510_3445135788021383168_o.jpg?_nc_cat=104&_nc_sid=a4a2d7&_nc_ohc=XntStZyg08YAX8M67Ho&_nc_ht=scontent.fhan4-1.fna&oh=5a860867604b7d3757a9f61920e18286&oe=5F55CC85" alt ="">
            </div>
            <div id ="cutt"></div>
        </div>

    </div>
    `
    elements.container.insertAdjacentHTML('beforeend', markup);
}