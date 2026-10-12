import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});


function Index() {

  const checkout = "COLOQUE_AQUI_O_LINK_DO_CHECKOUT";


  const [openFaq, setOpenFaq] = useState<number | null>(null);


  const faq = [
    {
      q: "Como recebo o e-book?",
      a: "Após a compra receberá o acesso ao produto digital."
    },
    {
      q: "É indicado para iniciantes?",
      a: "Sim. O conteúdo foi criado para pessoas sem experiência em anúncios."
    },
    {
      q: "Preciso ter experiência com anúncios?",
      a: "Não. O e-book explica os primeiros passos de forma simples."
    },
    {
      q: "Posso acessar pelo telemóvel?",
      a: "Sim. O PDF funciona em smartphones, tablets e computadores."
    }
  ];


  return (

<div className="min-h-screen bg-gray-50 text-gray-900">

<div className="max-w-md mx-auto px-5">


{/* HERO */}

<section className="text-center py-10">


<span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
Meta Ads Para Iniciantes
</span>


<h1 className="text-3xl font-extrabold mt-6 leading-tight">
Aprenda Meta Ads e Comece a Atrair Clientes
</h1>


<p className="text-gray-600 mt-4">
Aprenda a criar anúncios no Facebook e Instagram para atrair clientes e aumentar as vendas, mesmo sem experiência.
</p>



<div className="mx-auto mt-8 w-56 h-72 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 text-white flex flex-col items-center justify-center shadow-xl">

<div className="text-6xl mb-5">
📘
</div>

<h2 className="text-xl font-bold">
Meta Ads
</h2>

<p>
Iniciantes
</p>

</div>



<p className="mt-6 text-gray-400 line-through">
497 MT
</p>


<h2 className="text-4xl font-extrabold text-blue-600">
197 MT
</h2>


<a
href={checkout}
target="_blank"
className="block mt-6 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition"
>
QUERO O MEU E-BOOK
</a>


</section>





{/* DOR */}


<section className="py-8">

<h2 className="text-2xl font-bold text-center mb-6">
Este e-book é para si se...
</h2>


<div className="space-y-3">


[
"Nunca criou anúncios.",
"Tem medo de perder dinheiro.",
"Não sabe utilizar o Gestor de Anúncios.",
"Tem poucos clientes.",
"Quer divulgar melhor o seu negócio."
].map((item,index)=>(

<div
key={index}
className="bg-white p-4 rounded-xl shadow-sm flex gap-3"
>

<span className="text-blue-600">
✓
</span>

{item}

</div>

))


</div>

</section>





{/* SOLUÇÃO */}


<section className="py-8">

<h2 className="text-2xl font-bold text-center mb-6">
O que vai aprender
</h2>



<div className="space-y-3">


[
"Criar campanhas.",
"Escolher público.",
"Definir orçamento.",
"Criar anúncios.",
"Melhorar resultados.",
"Evitar erros."
].map((item,index)=>(

<div
key={index}
className="bg-white p-4 rounded-xl shadow-sm"
>

🚀 {item}

</div>

))


</div>


</section>






{/* RECEBE */}


<section className="py-8 bg-white rounded-2xl px-4">


<h2 className="text-2xl font-bold text-center mb-6">
O que recebe
</h2>



<div className="grid gap-4">


<div>
📘 <b>E-book PDF</b>
</div>


<div>
📱 <b>Compatível com telemóvel</b>
</div>


<div>
📈 <b>Passo a passo</b>
</div>


<div>
📝 <b>Checklist</b>
</div>


<div>
🎯 <b>Estratégias práticas</b>
</div>


</div>


</section>






{/* OFERTA */}


<section className="py-8">


<div className="bg-white rounded-2xl shadow p-6 text-center">


<h2 className="text-xl font-bold">
Oferta Especial
</h2>


<p className="mt-3 line-through text-gray-400">
497 MT
</p>


<div className="text-5xl font-extrabold text-blue-600">
197 MT
</div>



<a
href={checkout}
target="_blank"
className="block mt-6 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold"
>
COMPRAR AGORA
</a>


</div>


</section>







{/* FAQ */}


<section className="py-8">


<h2 className="text-2xl font-bold text-center mb-6">
Perguntas Frequentes
</h2>



{
faq.map((item,index)=>(


<div
key={index}
className="bg-white mb-3 rounded-xl overflow-hidden"
>


<button

onClick={()=>setOpenFaq(
openFaq===index ? null : index
)}

className="w-full p-4 text-left font-semibold flex justify-between"

>

{item.q}

<span>
⌄
</span>

</button>



{
openFaq===index && (

<p className="px-4 pb-4 text-gray-600 text-sm">
{item.a}
</p>

)

}



</div>


))

}



</section>






<footer className="text-center text-sm text-gray-500 py-8">

<p>
Política de Privacidade | Termos | Contacto
</p>

<br />

<p>
Aviso legal: Os resultados dependem da aplicação das estratégias e dedicação de cada pessoa.
</p>


</footer>



</div>

</div>

  );
}
