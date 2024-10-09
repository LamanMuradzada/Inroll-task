import React, { useState } from "react";
import "./Register.css";

const Register = () => {

    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Email:', email);

  };

    return (
        <>
        <div className="container">

        <div className="form-container">
      <h3><span className="card-content">Inroll</span> ilə kursları asan, sürətli şəkildə tapın və məlumatlı qərarlar verin</h3>
      <p>Salam. Biz hələ tam hazır olmadan sizi qarşıladıq.</p>
      <p>
        Layihəmizə maraq göstərdiyiniz üçün çox şadıq. Sizə rahat və funksional platforma təqdim etmək üçün çox çalışırıq və işlərimiz uğurla irəliləyir.
        Əgər platformamız hazır olanda sizə məlumat verməyimizi istəyirsinizsə, emailinizi aşağıya daxil edin!
      </p>
      {submitted ? (
        <p className="submit-text"><h3>Təşəkkür edirik.</h3>Əgər etibarlı email daxil etmisinizsə
        layihəmiz hazır olanda sizi məlumatlandıracağıq</p>
      ) : (

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Mail hesabınız"
          title="Mail hesabınızı daxil edin!"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Göndər</button>
      </form>
      )}
    </div>
        </div>
        </>
    )
}

export default Register