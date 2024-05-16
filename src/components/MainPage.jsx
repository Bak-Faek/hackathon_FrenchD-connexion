import './MainPage.css'

export default function MainPage() {
  return (
    <div className="mainPage">
        <div className='title'>
            <h2>Bienvenue</h2>
            <button>Commencer votre aventure</button>
        </div>
      <video className="video" autoPlay loop muted>
        {/* <source src={'../public/lavender.mp4'} type="video/mp4" /> */}
        <source src={'../public/woman.mp4'} type="video/mp4" />
      </video>
    </div>
  );
}
