import { forwardRef } from "react";

const Section = forwardRef(function Section(
  { id, className = "", customPaddings, children },
  ref,
) {
  const sectionClasses = `
    relative w-full flex justify-center
    ${customPaddings ? "py-10 lg:py-16 xl:py-20" : "py-20 lg:py-28 xl:py-36"}
    ${className}
  `.trim();

  return (
    <section ref={ref} id={id} className={sectionClasses}>
      <div className="w-full max-w-7xl px-5 mx-auto">{children}</div>
    </section>
  );
});

export default Section;
