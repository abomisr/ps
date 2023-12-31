import { crimeCard } from "@/app/types";
import { format } from "timeago.js";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { GiDrippingKnife } from "react-icons/gi";
import { useLocale, useTranslations } from "next-intl";
import { FaWikipediaW } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import Image from "next/image"
import Link from "next/link"
import {motion} from "framer-motion"
import { useMemo } from "react";

const CrimeCard = ({ crime,isDark }: { crime: crimeCard,isDark: boolean }) => {
  const t = useTranslations("Crimes");
  const locale = useLocale();

  const victims = useMemo(() => `${t("victims")}: ${crime.victims.map(((victim,index)=> ` ${victim.number} ${t(victim.type)}`))}.`, [crime])
  // ${crime.victims.length>1 && index+1 !== crime.victims.length? "":"" }

  return (
    <>
    <VerticalTimelineElement
      className="vertical-timeline-element--work drop-shadow-lg hover:drop-shadow-sm"
      contentStyle={{ background: !isDark? "#ffffff":"#282637" }}
      contentArrowStyle={{ borderRight: !isDark? "7px solid  #fff":"7px solid  #282637" }}
      date={format(crime.date)}
      dateClassName="text-gray-700 dark:text-gray-300"
      iconClassName="dark:bg-dark-2 bg-light-2"
      icon={<GiDrippingKnife />}
    >
      <div dir={locale === "ar"? "rtl":"ltr"}>
        <h3 className="vertical-timeline-element-title text-lg font-semibold">{t(crime.title)}</h3>
        <h4 className="vertical-timeline-element-subtitle">{victims}</h4>
        <h4 className="vertical-timeline-element-subtitle">{t("target")}: {t(crime.target)} {t("more_targets")}.</h4>
        <p>
          {t(crime.desc)}
        </p>

        <div className="flex items-center gap-3 mx-2 mt-3 pt-3 border-t-2 border-neutral-500">
          {t("resources")}: 
          {crime.resources.map((resource)=>(
            <Link href={resource.link} target="_blank" className="bg-light-1 dark:bg-dark-1 rounded-full p-3 text-lg hover:scale-105 active:scale-95">
              {
                resource.type === "wikipedia"?
                <FaWikipediaW />
                :
                <AiOutlineGlobal />
              }
            </Link>
          ))}
        </div>
      </div>

    </VerticalTimelineElement>
    {
      crime.image &&
      <motion.div
      initial={{ opacity: 0,marginBottom: -100 }}
      whileInView={{ opacity: 1, marginBottom:0 }}
      whileHover={{scale: 1.2}}
      className="relative w-full h-[300px]">
        <Image
          src={"/crimes/" + crime.image}
          alt={crime.image}
          fill
          className="object-contain rounded-md"
        />
      </motion.div>
    }
    </>
  );
};

export default CrimeCard;
