/* eslint-disable @next/next/no-img-element */
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextApiRequest,
  NextApiResponse,
} from "next";

import Section from "@/components/layout/Section";
import BaseLayout from "@/components/layout/layouts/BaseLayout";
import Link from "next/link";
import { ContinueButton } from "@/components/ui/button";
import { CurrentLessonQuery } from "@/components/lesson/lessonQueries";
import { client } from "@/apollo/server";
import { getServerSession } from "next-auth";
import { getAuthOptions } from "./api/auth/[...nextauth]";
import Image from "next/image";
import { CoursesQuery } from "@/components/course/courseQueries";
import SmallCourseCard from "@/components/course/SmallCourseCard";
import { getStrapiImageUrl } from "@/lib/utils";
// import useScrollSnap from "react-use-scroll-snap";

export async function getServerSideProps({
  req,
  res,
}: GetServerSidePropsContext) {
  const session = await getServerSession(
    req,
    res,
    getAuthOptions(req as NextApiRequest, res as NextApiResponse)
  );
  const [currentLessonQuery, coursesQuery] = await Promise.all([
    !!session?.user.id &&
      client.query({
        query: CurrentLessonQuery,
        variables: {
          userId: session?.user.id as unknown as string,
        },
      }),
    client.query({
      query: CoursesQuery,
    }),
  ]);
  let currentLesson;
  if (currentLessonQuery) {
    currentLesson =
      currentLessonQuery.data?.usersPermissionsUser?.data?.attributes
        ?.current_lesson?.data?.attributes ?? null;
  } else {
    currentLesson = null;
  }

  return {
    props: {
      currentLesson,
      courses: coursesQuery.data.courses?.data,
      // Will be passed to the page component as props
    },
  };
}

export default function Home({
  currentLesson,
  courses,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const currentLessonURL = `/courses/${
    currentLesson?.course_section?.data?.attributes?.course?.data?.id as string
  }/${currentLesson?.course_section?.data?.attributes?.index || 1}/${
    currentLesson?.index || 1
  }`;
  console.log(courses);
  return (
    <BaseLayout>
      {currentLesson && (
        <Section id="current-lesson" className="md:pb-0">
          <div className="flex w-full flex-col gap-4">
            <h1 className="text-5xl font-normal leading-3">
              Seguir haciendo...
            </h1>
            <div className="flex w-full flex-col gap-8 md:flex-row">
              <div className="flex w-3/4 flex-col gap-4">
                <Link href={currentLessonURL}>
                  <div className="relative aspect-video rounded-md border-4 border-primary">
                    <Image
                      src={
                        currentLesson?.api_video_uploader_api_video_asset?.data
                          ?.attributes?.thumbnail || ""
                      }
                      alt=""
                      width={1920}
                      height={1080}
                    />
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="img-anim absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                    >
                      <g clip-path="url(#clip0_1303_5468)">
                        <path
                          opacity="0.2"
                          d="M79.3773 79.3862C97.5365 61.227 97.5365 31.7851 79.3773 13.6259C61.2181 -4.53331 31.7762 -4.53331 13.617 13.6259C-4.54224 31.7851 -4.54224 61.227 13.617 79.3862C31.7762 97.5454 61.2181 97.5454 79.3773 79.3862Z"
                          fill="#61DEF8"
                        />
                        <path
                          d="M71.0625 46.5L32.4375 21.1875C32.4375 59.4375 32.4375 40.6875 32.4375 72L71.0625 46.5Z"
                          fill="#61DEF8"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1303_5468">
                          <rect width="93" height="93" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="flex w-1/4 flex-col justify-start gap-4 py-10">
                <h1 className="text-5xl font-normal leading-10">
                  {currentLesson?.Title}
                </h1>
                <span className="text-2xl leading-3 text-primary">
                  LECCIÓN {currentLesson?.index} - MÓDULO{" "}
                  {currentLesson?.course_section?.data?.attributes?.index}
                </span>
                <div className="flex flex-col gap-2">
                  <p className="text-xl">{currentLesson?.Summary}</p>
                </div>
                <div>
                  <Link href={currentLessonURL}>
                    <ContinueButton />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}

      <Section id="other-courses" className="gap-16">
        <h2 className="text-center text-5xl">
          {currentLesson
            ? "O elige otro de nuestros cursos..."
            : "Comienza con uno de nuestros cursos!"}
        </h2>

        <div className="grid grid-cols-1  gap-16 xl:grid-cols-2">
          {courses?.map((course, i) => (
            <SmallCourseCard
              key={i}
              courseId={course.id as string}
              title={course.attributes?.Title || ""}
              subtitle={course.attributes?.Summary || ""}
              image={getStrapiImageUrl(
                course.attributes?.CoverImage?.data?.attributes?.url
              )}
            />
          ))}
        </div>
      </Section>
    </BaseLayout>
  );
}
