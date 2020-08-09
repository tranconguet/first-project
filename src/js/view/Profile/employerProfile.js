import {elements} from '../../utility/elements';


export const renderEmployerProfile = () =>{
    const markup =`
    <div id="container">
        <strong style="font-size: 40px">Profile</strong>
        <form action="#" method="GET">
            <div class="left-container">
                <div>
                    <label for="fullname"><p>Full Name: </p></label>
                    <input class="input_field" type="text" name="fullName" id="fullname" required>
                    <br>
                </div>
                <div>
                    <p style="display: inline;">Sex: </p>
                    
                    <input type="radio" name="gender" value="male" id="male">
                    <label for="male">Male</label>
                    
                    <input type="radio" name="gender" value="female" id="female">
                    <label for="female">Female</label>
                </div>
                <div>
                    <label for="dateofbirth"><p>Date of birth:</p></label>
                    <input class="input_field" type="date" name="dateOfBirth" id="dateofbirth">
                </div>
                
                
                <div>
                    <label for="address"><p>Address:</p></label>
                    <input class="input_field" type="text" name="address" id="address" required>
                
                </div>

                <div>
                    <label for="phonenumber"><p>Phone number: </p></label>
                    <input class="input_field" type="text" name="phoneNumber" id="phonenumber" required>
            
                </div>
                <div>
                    <label for="email"><p>Email:</p></label>
                    <input class="input_field" type="text" name="email" id="email">
                </div>
            </div>

            <div class="right-container">
                <div>
                    <label for="habit">
                        <p>Hobbies: </p>
                    </label>
                    <input class="input_field" type="text" id="habit" name="habit">
                </div>
                <div>
                    <label for="grade"><p>Literacy: </p></label>
                    <input class="input_field" type="text" name="grade" id="grade" required>
                
                </div>
                <div>
                    <label for="grade"><p>Your skills: </p></label>
                    <input class="input_field" id="skills" type="text" name="grade" id="grade" required>
                    <p style="font-size:15px">List your skills . . .</p>
                </div>
                <div>
                    <label for="experience"><p>Experiences: </p></label>
                    <textarea style="font-size: 20px" name="experience" id="experience" cols="40" rows="10"></textarea>
                </div>
                    
            </div>
        </form>
        <input class="btn-update" type="submit"  value="Update">
        <input class="btn-findjob" type="submit"  value="Jobs for me">
    </div>
    `
    elements.container.insertAdjacentHTML('beforeend', markup);
}