import { SectionWrapper } from "../hoc";
import { useLocalState } from "../hooks/useLocalStorage";
import { format } from "date-fns";

const Certificate = () => {

    const [user, setUser] = useLocalState("", "user");
    let currentDate = format(new Date(), 'MMMM do yyyy');
    console.log(user);

    return(
        <section style={{justifyContent: "center", alignItems:"center", display:"flex"}}>
            <div className="text-center m-auto" class="outer-border" style={{width: "800px", height:"650px", padding:"20px", textAlign:"center", border: "10px solid #ed9393", backgroundColor: "black"}}>
                <div class="inner-dotted-border" style={{width:"750px", height:"600px", padding:"20px", textAlign:"center", borderStyle: "dotted"}}>                
                    <span class="certification" style={{fontSize:"50px", fontWeight:"bold", color: "#ed9393"}}>Certificate</span>    <br/>   
                    <span class="certify"><i>This is to certify that</i></span> <br/>
                    <span class="name" style={{fontSize:"30px", color:"green"}}><b><span>{user}</span></b></span><br/><br/>
                    <span class="certify" style={{fontSize:"25px"}}><i>has successfully completed the certification</i></span> <br/><br/>
                    <span class="fs-30" style={{fontSize:"30px"}}>Introduction to Astronomy</span> <br/><br/>
                    <span class="fs-20" style={{fontSize:"20px"}}>with score of <b>A+</b></span> <br/><br/><br/><br/>
                    <span class="certify"><i>{currentDate}</i></span>
                    <span class="fs-30"><span id='date-time'></span></span>
                </div>
            </div>
        </section>
        
    );
};

export default SectionWrapper(Certificate, "certificate");