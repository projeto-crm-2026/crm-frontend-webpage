import { FAQ_QUESTIONS } from "./data"
import { QuestionItem } from "./question-item"

export const FAQ = async () => {
  return (
    <section className="flex w-full justify-between border-t border-[#d4d2c7]">
      <div className="bg-stripes relative hidden w-full flex-1 border-r border-[#d4d2c7] lg:flex" />
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 py-8 lg:max-w-7xl lg:gap-12 lg:px-8 lg:py-16">
        <article className="flex w-full items-center flex-col justify-center gap-4">
          <h2 className="text-3xl text-center font-bold lg:text-4xl xl:text-5xl">
            Tem dúvidas? Relaxa, nós <br className="hidden lg:block" /> temos as
            respostas.
          </h2>
          <p className="text-sm text-center font-medium text-neutral-500 lg:text-base">
            Selecionamos algumas dúvidas que recebemos com frequência sobre{' '}
            <br className="hidden lg:block" /> nossos serviços, elas podem ser
            úteis para você!
          </p>
        </article>
        <div className="flex w-full justify-end">
          <div className="flex w-full flex-col border border-[#d4d2c7]">
            {FAQ_QUESTIONS.map((question, index: number) => (
              <QuestionItem
                copy={question}
                index={index}
                key={`cmms-questions-question-${question.title}-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-stripes relative hidden w-full flex-1 border-l border-[#d4d2c7] lg:flex" />
    </section>
  )
}
