import Charts from "@/components/dashboard/Charts";
import ModeToggle from "@/components/Mode/ModeToggle";





export default function Home() {
  return (
    <div className="flex dark:bg-black bg-white min-h-screen">
    <main className="flex-grow relative">
      <ModeToggle/>
      <Charts/>
    </main>
    </div>
  );
}
