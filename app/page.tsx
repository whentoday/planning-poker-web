"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import AnimatedLogo from "@/components/ui/animated-logo";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex-1">
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <AnimatedLogo />
        <h1 className="font-bold text-5xl mt-4">Planning Poker Online</h1>
        <p className="text-zinc-500 text-base">
          Sem limitações, crie ou acesse uma sala e convide seu time.
        </p>
        <div className="flex gap-4">
          <Button onClick={() => router.push("/room?type=create")}>
            Criar sala
          </Button>
          <Button
            onClick={() => router.push("/room?type=join")}
            variant="secondary"
          >
            Acessar sala
          </Button>
        </div>
      </div>
      <div className="mt-10 py-10 rounded-md flex w-full text-center justify-center border border-zinc-200 flex-col px-4">
        <p>Ajude a manter o sistema online e livre de anúncios.</p>
        <a
          href="https://www.asaas.com/c/6f2stepyig5a0hxh"
          target="_blank"
          className="mt-4"
        >
          <Button>Fazer uma doação</Button>
        </a>
      </div>
    </div>
  );
}
