import ChatBox from '../components/ChatBox';
import CartPreview from '../components/CartPreview';

const Chat = () => {
  return (
    <section className="section-padding bg-[var(--bg)]">
      <div className="container-custom flex flex-col gap-6 xl:flex-row">
        <div className="flex-1">
          <ChatBox />
        </div>

        <CartPreview />
      </div>
    </section>
  );
};

export default Chat;