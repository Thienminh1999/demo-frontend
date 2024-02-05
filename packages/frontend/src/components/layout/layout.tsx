import Sitebar from "./Sitebar/Sitebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='layout-homepage'>
      <Sitebar />
      <div className='content-container'>{children}</div>
    </div>
  );
}
