

export default function Home() {
  return (
    <>
   
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <p className="font-mono text-4xl justify-center">Is my PC On?</p>
      <p className="justify-center text-4xl font-mono"> ➩ Yess!</p>
       
        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center font-mono">
      <p> This is tool for everyone who is confused about their PC's</p>
      
     
      
      </footer>
    </div>
    </>
  );
}
