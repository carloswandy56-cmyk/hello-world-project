import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/')({ component: Index });

function Index() {
  const checkout = 'COLOQUE_AQUI_O_LINK_DO_CHECKOUT';
  const [faq, setFaq] = useState<number | null>(null);

  const items = ['Nunca criou anúncios', 'Tem medo de perder dinheiro', 'Não sabe usar o Gestor de Anúncios', 'Tem poucos clientes', 'Quer divulgar melhor o negócio'];
  const learn = ['Criar campanhas', 'Escolher público', 'Definir orçamento', 'Criar anúncios', 'Melhorar resultados', 'Evitar erros'];
  const questions = ['Como recebo o e-book?', 'É para iniciantes?', 'Preciso de experiência?', 'Funciona no telemóvel?'];

  return <main className="min-h-screen bg-gray-50 text-gray-900"><div className="max-w-md mx-auto px-5">
    <section className="text-center py-10">
      <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold">Meta Ads Para Iniciantes</span>
      <h1 className="text-4xl font-black mt-6">Aprenda Meta Ads e Comece a Atrair Clientes</h1>
      <p className="text-gray-600 mt-4">Aprenda a criar anúncios no Facebook e Instagram para atrair clientes e aumentar vendas, mesmo sem experiência.</p>
      <div className="my-8 mx-auto w-56 h-72 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-900 text-white flex flex-col justify-center items-center shadow-xl"><span className="text-6xl">📘</span><h2 className="text-2xl font-bold">Meta Ads</h2><p>Iniciantes</p></div>
      <p className="line-through text-gray-400">497 MT</p><h2 className="text-5xl font-black text-blue-600">197 MT</h2>
      <a href={checkout} target="_blank" className="block mt-6 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold">QUERO O MEU E-BOOK</a>
    </section>

    <section className="py-8"><h2 className="text-2xl font-bold text-center mb-5">Este e-book é para si se...</h2>{items.map(x=><div className="bg-white p-4 rounded-xl mb-3 shadow-sm" key={x}>✓ {x}</div>)}</section>

    <section className="py-8"><h2 className="text-2xl font-bold text-center mb-5">O que vai aprender</h2>{learn.map(x=><div className="bg-white p-4 rounded-xl mb-3" key={x}>🚀 {x}</div>)}</section>

    <section className="bg-white rounded-3xl p-6"><h2 className="text-2xl font-bold text-center mb-5">O que recebe</h2><p>📘 E-book PDF</p><p>📱 Compatível com telemóvel</p><p>📈 Passo a passo</p><p>📝 Checklist</p><p>🎯 Estratégias práticas</p></section>

    <section className="py-8"><div className="bg-white rounded-3xl p-6 text-center shadow"><h2 className="font-bold text-xl">Oferta Especial</h2><p className="line-through text-gray-400">497 MT</p><div className="text-5xl font-black text-blue-600">197 MT</div><a href={checkout} target="_blank" className="block mt-6 bg-green-500 text-white py-4 rounded-xl font-bold">COMPRAR AGORA</a></div></section>

    <section className="py-8"><h2 className="text-2xl font-bold text-center mb-5">Perguntas Frequentes</h2>{questions.map((q,i)=><div className="bg-white rounded-xl mb-3" key={q}><button className="w-full p-4 text-left font-bold" onClick={()=>setFaq(faq===i?null:i)}>{q} +</button>{faq===i&&<p className="px-4 pb-4 text-gray-600">Resposta disponível após a configuração final do produto.</p>}</div>)}</section>

    <footer className="text-center text-sm text-gray-500 py-8">Política de Privacidade | Termos | Contacto</footer>
  </div></main>;
}
