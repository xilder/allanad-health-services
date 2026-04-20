import { Skeleton } from "@/components/ui/skeleton"

export function CardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <Skeleton className="h-12 w-12 rounded-lg" />
      <Skeleton className="mt-4 h-6 w-3/4" />
      <Skeleton className="mt-2 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-5/6" />
      <Skeleton className="mt-4 h-9 w-28" />
    </div>
  )
}

export function ServiceCardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <Skeleton className="h-14 w-14 rounded-lg" />
      <Skeleton className="mt-4 h-7 w-2/3" />
      <Skeleton className="mt-3 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-4/5" />
      <Skeleton className="mt-6 h-10 w-32" />
    </div>
  )
}

export function TestimonialSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-3/4" />
      <div className="mt-6 flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div>
          <Skeleton className="h-4 w-24" />
          <Skeleton className="mt-1 h-3 w-20" />
        </div>
      </div>
    </div>
  )
}

export function TeamMemberSkeleton() {
  return (
    <div className="text-center">
      <Skeleton className="mx-auto h-32 w-32 rounded-full" />
      <Skeleton className="mx-auto mt-4 h-6 w-32" />
      <Skeleton className="mx-auto mt-2 h-4 w-24" />
      <Skeleton className="mx-auto mt-3 h-4 w-full max-w-xs" />
      <Skeleton className="mx-auto mt-2 h-4 w-5/6 max-w-xs" />
    </div>
  )
}

export function ArticleCardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <div className="p-6">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="mt-3 h-6 w-full" />
        <Skeleton className="mt-2 h-4 w-full" />
        <Skeleton className="mt-2 h-4 w-3/4" />
        <Skeleton className="mt-4 h-9 w-24" />
      </div>
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <div className="py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <Skeleton className="mx-auto h-12 w-3/4 max-w-2xl" />
        <Skeleton className="mx-auto mt-4 h-12 w-2/3 max-w-xl" />
        <Skeleton className="mx-auto mt-6 h-6 w-full max-w-2xl" />
        <Skeleton className="mx-auto mt-2 h-6 w-5/6 max-w-2xl" />
        <div className="mt-8 flex justify-center gap-4">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-12 w-40" />
        </div>
      </div>
    </div>
  )
}

export function FormSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-4 w-20" />
        <Skeleton className="mt-2 h-10 w-full" />
      </div>
      <div>
        <Skeleton className="h-4 w-24" />
        <Skeleton className="mt-2 h-10 w-full" />
      </div>
      <div>
        <Skeleton className="h-4 w-16" />
        <Skeleton className="mt-2 h-10 w-full" />
      </div>
      <div>
        <Skeleton className="h-4 w-20" />
        <Skeleton className="mt-2 h-32 w-full" />
      </div>
      <Skeleton className="h-11 w-full" />
    </div>
  )
}

export function PageHeaderSkeleton() {
  return (
    <div className="py-12 text-center">
      <Skeleton className="mx-auto h-10 w-64" />
      <Skeleton className="mx-auto mt-4 h-5 w-full max-w-xl" />
      <Skeleton className="mx-auto mt-2 h-5 w-3/4 max-w-xl" />
    </div>
  )
}
